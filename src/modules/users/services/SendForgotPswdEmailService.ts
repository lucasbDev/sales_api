import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../typeorm/repositories/user-repository';
import UserTokenRepository from '../typeorm/repositories/user-tokens-repository';

interface IRequest {
    email: string;
}

export class SendForgotEmailService {
    public async execute ({ email }: IRequest): Promise<void>{
        const userRepositoy = getCustomRepository(UsersRepository);
        const userTokenRepository = getCustomRepository(UserTokenRepository)

        const user = await userRepositoy.findByEmail(email);

        if(!user) {
            throw new AppError('Usuário não existe!')
        }

        const token = await userTokenRepository.generate(user.id)
        console.log(token)
    }
}
