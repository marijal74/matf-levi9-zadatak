import express from "express"

export class resultsController{

    static registerRoutes(app: express.Application){
        app.post("/results", (request, response) => {
            new resultsController().getResults(request, response);
        })
    }

    async store(req: express.Request, res: express.Response){
        
    }
    getResults(request:express.Request, response: express.Response){
        response.send("hello from getResults");
    }

}