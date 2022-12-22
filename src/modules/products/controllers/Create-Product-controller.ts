import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { CreateProductService } from '../services/Create-Product-Service'

export class CreateProductController{
    async create(request: Request,response: Response) {
        const { name, price,quantity } = request.body
        const createProduct = new CreateProductService()
        const result = await createProduct.execute({
            name,
            price,
            quantity,
        })
        if(!result){
            throw new AppError('Não foi possível criar o produto!')
        }
        return response.status(200).json(result)
    }
}