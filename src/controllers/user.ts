import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {

    public addNewUser(request: Request, response: Response) { 

        let newUser = new User(request.body);
        newUser.save((err, user) => {
            if(err){
                response.send(err);
            }    
            response.json(user);
        });
    }
    public getUsers(request: Request, response: Response) {    

        User.find({}, (err, user) => {
            if(err){
                response.send(err);
            }
            response.json(user);
        });
    }
    public getUser(request: Request, response: Response) {   

        User.findById(request.params.id, (err, user) => {
            if(err){
                response.send(err);
            }
            response.status(200).json(user);
        });
    }
    public udpateUser(request: Request, response: Response) {  

        User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (err, user) => {

            if(err){
                response.send(err);
            }
            response.status(200).json(user);
        });
    }
    public deleteUser(request: Request, response: Response) {       

        User.remove({ _id: request.params.id }, (err, user) => {

            if(err){
                response.send(err);
            }
            response.status(200).json({ message: 'Successfully deleted user!'});
        });
    }
    
}