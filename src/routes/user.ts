import {Request, Response, Application} from "express";
import { UserController } from "../controllers/user";

export class UserRoutes {

    public userController: UserController = new UserController();

    public routes(app: Application): void {

        // User routes
        app.route("/user").post(this.userController.addNewUser);
        app.route("/users").get(this.userController.getUsers);
        app.route("/user/:id")
                            .get(this.userController.getUser)
                            .put(this.userController.udpateUser)
                            .delete(this.userController.deleteUser);
    }
}
