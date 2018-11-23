import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/index";
import { UserRoutes } from "./routes/user";
import * as mongoose from "mongoose";


class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public userRoutes: UserRoutes = new UserRoutes();
    public mongoUrl: string = 'mongodb://localhost/Express'; 

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();

        //Using All route here
        this.routePrv.routes(this.app);   
        this.userRoutes.routes(this.app);
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
                .then( () => {
                    console.log('MongoDB is connected...');
                })
                .catch( (err) => {
                    console.log('MongoDB can not be connected...');
                    throw err;
                });    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;