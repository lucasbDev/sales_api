import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm'
import UsersRepository from '../typeorm/repositories/user-repository';
import UserTokenRepository from '../typeorm/repositories/user-tokens-repository';
import { addHours, isAfter } from 'date-fns'
import { hash } from 'bcryptjs'

interface IRequest {
    token: string;
    password: string;
}

export class ResetPswdService {
    public async execute ({ token, password }: IRequest): Promise<void>{
        const userRepositoy = getCustomRepository(UsersRepository);
        const userTokenRepository = getCustomRepository(UserTokenRepository)

        const userToken = await userTokenRepository.findByToken(token);

        if(!userToken) {
            throw new AppError('Token do Usuário não existe!')
        }
        const user = await userRepositoy.findById(userToken.user_id);

        if(!user) {
            throw new AppError('Usuário nâo encontrado!')
        }

        const tokenCreatedAt = userToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(),compareDate))   {
            throw new AppError('token expirado!');
        }

        user.password = await hash(password, 8)

        await userRepositoy.save(user);
                
        console.log(token)
    }
}
