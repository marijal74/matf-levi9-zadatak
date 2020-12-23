import express from "express";
import {resultsController} from "./controllers/resultsController";
import * as bodyParser from "body-parser";
import {createConnection} from "typeorm"

class App{
    private app: express.Application;

    constructor(){
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
    }
    public async start(){
        const port = process.env.PORT || 8080;
        const connection = await createConnection();
        resultsController.registerRoutes(this.app, connection);
        
        this.app.listen(port, () => {
            console.log("app listening on port http://localhost:" + port);
        })
    }

}

const app = new App();
app.start();
