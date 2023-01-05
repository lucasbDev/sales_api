import { Request, Response } from 'express'
import AppError from '@shared/errors/AppError'
import {
    CreateCustomerService,
    DeleteCustomerService,
    ListCustomerService,
    ShowCustomerService,
    UpdateCustomerService
} from '../services/index'


export default class customersController {
    public async create(request: Request,response: Response) {
        const { name, email } = request.body
        const createCustomer = new CreateCustomerService()
        const result = await createCustomer.execute({
            name,
            email
        })
        if(!result){
            throw new AppError('Não foi possível criar adiconar o cliente!')
        }
        return response.status(200).json(result)
    }

    public async update(request: Request,response: Response) {
        const { name, email } = request.body
        const { id } = request.params
        const updateCustomer = new UpdateCustomerService()
        const result = await updateCustomer.execute({
            id,
            name,
            email
        }) 
        if(!result){
            throw new AppError('não foi possível atualizar o cliente!')
        }
        return response.status(201).json(result)
    }

    public async show(request: Request,response: Response) {
        const {id} = request.params
        const showCustomer = new ShowCustomerService()
        const result = await showCustomer.execute({
            id
        }) 
        if(!result){
            throw new AppError('Cliente não encontrado! ')
        }
        return response.status(200).json(result)
    }

    async index(request: Request,response: Response) {
        const listCustomer = new ListCustomerService()
        const result = await listCustomer.execute()
        if(!result){
            throw new AppError('Cliente não encontrado! ')
        }
        return response.status(200).json(result)
    }

    async delete(request: Request,response: Response) {
        const {id} = request.params
        const deletecustomer = new DeleteCustomerService()
        await deletecustomer.execute({
            id
        })
        
        return response.status(200).json([])
    }
}