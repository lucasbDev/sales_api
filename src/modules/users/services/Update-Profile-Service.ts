import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import   UsersRepository  from "../typeorm/repositories/user-repository";

interface IRequest {
    user_id: string
    name: string;
    email: string;
    password?: string
    old_password?: string
}

export class UpdateProfileService {
    public async execute({
        user_id,
        email,
        name,
        old_password,
        password
    }: IRequest): Promise< User> {
        const usersRepository = getCustomRepository( UsersRepository );

        const user = await usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('Usuário não ncontrado!');
        }
        const userUpdateEmail = await usersRepository.findByEmail(email);

        if(userUpdateEmail && userUpdateEmail.id != user_id) {
            throw new AppError('Esse email já está sendo utilizado!');
        }

        if(password && !old_password) {
            throw new AppError('É necessário informar a senha antiga!')
        }
        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError('As senhas não coincidem!');
            }

            user.password = await hash(password, 8);
        }

        user.name = name;
        user.email = email;
        
        
        await usersRepository.save(user);

        return user;
    }
}