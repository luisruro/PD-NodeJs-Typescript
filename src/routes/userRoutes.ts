import { Router } from 'express';
import UserController from '../constrolllers/userController';


export const userRouter = Router();

try {
    userRouter.get('/', UserController.getAllUsers);
    userRouter.get('/:id', UserController.getUsersById);
    userRouter.post('/', UserController.createUsers);
    userRouter.put('/:id', UserController.updateUsers);
    userRouter.delete('/:id', UserController.deleteUsers);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}