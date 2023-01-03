import AppError from '@shared/errors/AppError';
import path from 'path';
import fs from 'fs'
import { getCustomRepository } from 'typeorm'
import User  from '../typeorm/entities/User'
import UsersRepository from '../typeorm/repositories/user-repository';
import UploadConfig from '@config/upload'

interface IRequest {
   user_id: string;
   avatarFileName: string;
}

export class UpdateAvatarService {
    public async execute ({ user_id, avatarFileName }: IRequest): Promise<User>{
        const userRepositoy = getCustomRepository(UsersRepository);
        
        const user = await userRepositoy.findById(user_id);

        if(!user) {
            throw new AppError ('Usúario não encontrado!')

        }

        if(user.avatar) {
            const userAvatarFilePath = path.join(UploadConfig.directory, user.avatar);
            const userAvatarFilesExists = await fs.promises.stat(userAvatarFilePath);   
            
            if (userAvatarFilesExists) {
                await fs.promises.unlink(userAvatarFilePath)
            }
        }   

        user.avatar  = avatarFileName;

        await userRepositoy.save(user)
        
        return user;

        }    
}
