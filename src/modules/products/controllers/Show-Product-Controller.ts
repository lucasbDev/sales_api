import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { ShowProductService } from '../services/Show-Product-Service'

export class ShowProductController{
    async show(request: Request,response: Response) {
        const {id} = request.params
        const showProduct = new ShowProductService()
        const result = await showProduct.execute({id}) //corrigir
        if(!result){
            throw new AppError('Produto não encontrado! ')
        }
        return response.status(200).json(result)
    }
}