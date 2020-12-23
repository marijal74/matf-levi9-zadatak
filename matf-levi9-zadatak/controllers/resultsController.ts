import express from "express"
import { Connection, ObjectID } from "typeorm";
import {Result} from "../entities/result"

export class resultsController{

    connection:Connection;
    constructor(con:Connection){
        this.connection = con;
    }

    static registerRoutes(app: express.Application, con: Connection){
        app.post("/admin/unos-novog-proizvoda", (request, response) => {
            new resultsController(con).store(request, response);
        });
        app.get("/admin/proizvodi/:id", (request, response) => {
            new resultsController(con).getResult(request.body.id, response);
        });
        app.get("/admin/proizvodi", (request, response) => {
            new resultsController(con).getResults(request, response);
        })
        app.delete("/admin/proizvodi/:id", (request, response) => {
            new resultsController(con).deleteResult(request, response);
        })

    }

    async store(req: express.Request, res: express.Response){
        const new_item = new Result();
        new_item.name = req.body.name;
        new_item.description = req.body.description;
        new_item.price = req.body.price;
        await this.connection.mongoManager.save(new_item)
        res.status(201).send("saved item");
        
    }
    async getResults(request:express.Request, response: express.Response){

        const items = await this.connection.mongoManager.find(Result);
        response.send(items);
    }
    async getResult(id:string, response: express.Response){
        const item = await this.connection.mongoManager.findOne(Result, id);
        response.send(item);
    }

    async deleteResult(req : express.Request, res: express.Response){
        console.log(req.params.id);
        await this.connection.mongoManager.delete(Result, req.params.id);
        res.send("delete");
    }

}