import { injectable, inject } from 'tsyringe';
import { User } from '../models/user';
import UserRepository from '../repositories/userRepository';

@injectable()
export default class UserService { 
    constructor(@inject(UserRepository) private userRepository: UserRepository) {}

    async getAllUsers() { 
        return await this.userRepository.findAll(); 
    }

    async getUsersById(id: number) {
        return await this.userRepository.findById(id);
    }

    async createUsers(user: Partial<User>) { 
        return await this.userRepository.create(user);
    }

    async updateUsers(id: number, user: Partial<User>) { 
        return await this.userRepository.update(id, user);
    }

    async deleteUsers(id: number) { 
        return await this.userRepository.deleteById(id);
    }
}