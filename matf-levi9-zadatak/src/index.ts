import express from "express";
import {resultsController} from "./controllers/resultsController";
import * as bodyParser from "body-parser";
class App{
    private app: express.Application;

    constructor(){
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
    }
    public start(){
        resultsController.registerRoutes(this.app);
        
        this.app.listen(8080, () => {
            console.log("app listening on port http://localhost:8080");
        })
    }

}

const app = new App();
app.start();
