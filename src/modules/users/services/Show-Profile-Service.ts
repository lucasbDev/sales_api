import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import   UsersRepository  from "../typeorm/repositories/user-repository";

interface IRequest {
    user_id: string
}

export class ShowProfileService {
    public async execute({ user_id }: IRequest): Promise< User> {
        const usersRepository = getCustomRepository( UsersRepository);

        const user = await usersRepository.findById(user_id)

        if (!user) {
            throw new AppError('Usuário não ncontrado!');
        }

        return user;
    }
}