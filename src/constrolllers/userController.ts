import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserService from '../services/userService';




export default class UserController { // Controller class of users, this class will start with the call of processes after the router
    static async getAllUsers(_: Request, res: Response) {// Get all users has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const userService = container.resolve(UserService); // Get users by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const users = await userService.getAllUsers();
            if (!users) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(users)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getUsersById(req: Request, res: Response) { // Get users by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const userService = container.resolve(UserService);
            const users = await userService.getUsersById(parseInt(req.params.id));
            if (!users) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(users)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createUsers(req: Request, res: Response) { // create users also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const userService = container.resolve(UserService);
            
            const users = await userService.createUsers(req.body);
            console.log(users.toJSON());
            res.status(201).json(users)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateUsers(req: Request, res: Response) {  // update users by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific user
        try {
            const userService = container.resolve(UserService);
            const users = await userService.updateUsers(parseInt(req.params.id), req.body);
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteUsers(req: Request, res: Response) { // delete users by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a user given by params
        try {
            const userService = container.resolve(UserService);
            const users = await userService.deleteUsers(parseInt(req.params.id));
            res.status(200).json(users);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}