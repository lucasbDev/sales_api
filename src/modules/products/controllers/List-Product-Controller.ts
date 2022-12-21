import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { ListProductService } from '../services/List-Product-Service'

export class ListProductController{
    async list(request: Request,response: Response) {
        const listProduct = new ListProductService()
        const result = await listProduct.execute()
        if(!result){
            throw new AppError('Produto não encontrado! ')
        }
        return response.status(200).json(result)
    }
}