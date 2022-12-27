import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm'
import User  from '../typeorm/entities/User'
import UsersRepository from '../typeorm/repositories/user-repository';

interface IRequest {
    email: string;
    password: string;
}

interface IToken {
    user: User;
    token: string;
}

export class CreateSessionService {
    public async execute ({email, password}: IRequest): Promise<IToken> {
        const userRepositoy = getCustomRepository(UsersRepository);
        const user = await userRepositoy.findByEmail(email);

        if (!user) {
            throw new AppError('Senha ou e-mail incorreto!', 401);
        }

        const PwdOk = await compare(password, user.password)

         if (!PwdOk) {
            throw new AppError('Senha ou e-mail incorreto!', 401);
        }

        const token = sign({}, 'a958c6583a9384936d0f432841308a51', {
            subject: user.id,
            expiresIn: '1d',
        }) //payload //hash //

        
        return {
            user,
            token
        }
    }
}
