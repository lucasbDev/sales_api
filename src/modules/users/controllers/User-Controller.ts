import { Request, Response } from 'express'
import AppError from '@shared/errors/AppError'
import {
    CreateUserService,
    ListUserService
} from '../services/index'

export default class UsersController {
    public async create(request: Request,response: Response) {
        const { name, email, password } = request.body
        const createUser = new CreateUserService()
        const result = await createUser.execute({
            name,
            email,
            password,
        })
        if(!result){
            throw new AppError('Não foi possível criar o usuário!')
        }
        return response.status(200).json(result)
    }
    
    async index(request: Request,response: Response) {
        const listUser = new ListUserService()
        const result = await listUser.execute()
        if(!result){
            throw new AppError('Usuário não encontrado! ')
        }
        return response.status(200).json(result)
    }
}