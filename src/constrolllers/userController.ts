import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserService from '../services/userService';




export default class UserController { // users controller class, it will start the process after the router
    static async getAllUsers(_: Request, res: Response) {// "getAllUsers" has a dependency in services, this method will give a response and catch any exceptions through GET request
        try {
            const userService = container.resolve(UserService); 
            const users = await userService.getAllUsers();
            if (!users) return res.status(404).json({
                message: "Users not found"
            });
            res.status(200).json({message: "Users found", data: users})

        } catch (error) {
            res.status(500).json({
                message: `Somenthing went wrong getting users`,
                error: error
            })
        }
    }

    static async getUsersById(req: Request, res: Response) { // "getUsersById" has a dependency in services as well, this method will give a response and catch any exceptions during the GET by ID request
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getUsersById(parseInt(req.params.id));
            if (!users) return res.status(404).json({
                message: "User not found"
            });
            res.status(200).json({message: "User found", data: users})

        } catch (error) {
            res.status(500).json({
                message: `Somenthing went wrong getting user by ID`,
                error: error
            })
        }
    }
    
    static async createUsers(req: Request, res: Response) { // "createUsers" also has a dependency in services, this method will give a response and catch any exceptions during the POST request
        try {
            const userService = container.resolve(UserService);
            
            const users = await userService.createUsers(req.body);
            users.toJSON()
            res.status(201).json({message: "product has been created successfully", data: users})

        } catch (error) {
            res.status(400).json({
                message: `Somenthing went wrong creating user`,
                error: error
            })
        }
    }

    static async updateUsers(req: Request, res: Response) {  // "updateUsers" has a dependency in services, this method will give a response and catch any exceptions during the process of PUT request
        try {
            const userService = container.resolve(UserService);
            const users = await userService.updateUsers(parseInt(req.params.id), req.body);
            res.status(200).json({message: "product has been updated successfully", data: users});
        } catch (error) {
            res.status(404).json({
                message: `Somenthing went wrong updating user`,
                error: error
            })
        }
    }

    static async deleteUsers(req: Request, res: Response) { // "deleteUsers" has a dependency in services, this method will give a response and catch any exceptions during the DELETE request
        try {
            const userService = container.resolve(UserService);
            const users = await userService.deleteUsers(parseInt(req.params.id));
            res.status(200).json({message: "product has been deleted successfully", data: users});
        } catch (error) {
            res.status(404).json({
                message: `Somenthing went wrong deleting user`,
                error: error
            })
        }
    }
}