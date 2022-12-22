import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { DeleteProductService } from '../services/Delete-Product-Service'

export class DeleteProductController{
    async delete(request: Request,response: Response) {
        const {id} = request.params
        const deleteProduct = new DeleteProductService()
        const result = await deleteProduct.execute({id}) //corrigir
        
        return response.status(200).json([])
    }
}