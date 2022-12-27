import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm'
import User  from '../typeorm/entities/User'
import UsersRepository from '../typeorm/repositories/user-repository';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

export class CreateUserService {
    public async execute ({ name, email, password}: IRequest): Promise<User>{
        const userRepositoy = getCustomRepository(UsersRepository);
        const emailExists = await userRepositoy.findByEmail(email);

        if (emailExists) {
            throw new AppError('Email já cadastrado!');
        }

        const user = userRepositoy.create({
            name,
            email,
            password
        });

        await userRepositoy.save(user);
        return user
    }
}
