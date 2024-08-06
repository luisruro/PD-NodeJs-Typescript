import { injectable } from 'tsyringe';
import { User } from '../models/user';


@injectable()
export default class UserRepository { 
    async findAll() { 
        return await User.findAll();
    }

    async findById(id: number) { 
        return await User.findByPk(id);
    }

    async create(user: Partial<User>) { 
        return await User.create(user);
    }

    async update(id: number, user: Partial<User>) { 
        const existingUser = await User.findByPk(id);
        if (existingUser) {
            return await existingUser.update(user);
        }
        throw new Error('User not found');
    }

    async deleteById(id: number) { 
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return;
        }
        throw new Error('User not found');
    }
}