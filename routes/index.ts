import {Request, Response, Application} from "express";

export class Routes {       
    public routes(app: Application): void {  
        
        app.route('/')
        .get((request: Request, response: Response) => {            
            response.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        }); 
                
    }
}