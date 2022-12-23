import { Request, Response } from 'express'
import AppError from '@shared/errors/AppError'
import {
    CreateProductService,
    DeleteProductService,
    ListProductService,
    ShowProductService,
    UpdateProductService
} from '../services/index'

export default class ProductsController {
    public async create(request: Request,response: Response) {
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

    public async update(request: Request,response: Response) {
        const { name, price, quantity } = request.body
        const { id } = request.params
        const updateProduct = new UpdateProductService()
        const result = await updateProduct.execute({
            id,
            name,
            price,
            quantity
        }) //corrigir
        if(!result){
            throw new AppError('não foi possível atualizar o produto!')
        }
        return response.status(201).json(result)
    }

    public async show(request: Request,response: Response) {
        const {id} = request.params
        const showProduct = new ShowProductService()
        const result = await showProduct.execute({id}) //corrigir
        if(!result){
            throw new AppError('Produto não encontrado! ')
        }
        return response.status(200).json(result)
    }

    async index(request: Request,response: Response) {
        const listProduct = new ListProductService()
        const result = await listProduct.execute()
        if(!result){
            throw new AppError('Produto não encontrado! ')
        }
        return response.status(200).json(result)
    }

    async delete(request: Request,response: Response) {
        const {id} = request.params
        const deleteProduct = new DeleteProductService()
        const result = await deleteProduct.execute({id}) //corrigir
        
        return response.status(200).json([])
    }
}