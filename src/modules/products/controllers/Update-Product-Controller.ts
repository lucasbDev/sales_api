import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { UpdateProductService } from '../services/Update-Product-Service'

export class UpdateProductController{
    async show(request: Request,response: Response) {
        const {id} = request.params
        const updateProduct = new UpdateProductService()
        const result = await updateProduct.execute(id) //corrigir
        if(!result){
            throw new AppError('não foi possível atualizar o produto!')
        }
        return response.status(201).json(result)
    }
}