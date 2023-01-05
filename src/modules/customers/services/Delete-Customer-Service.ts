import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customers";
import   CustomersRepository  from "../typeorm/repositories/Customers-Repository";

interface IRequest {
    id: string
}

export class DeleteCustomerService {
    public async execute({id}: IRequest): Promise< void > {
        const customersRepository = getCustomRepository(CustomersRepository);

        const customer = await customersRepository.findOne(id)

        if(!customer){
            throw new AppError('Cliente não encontado!')
        }

        await customersRepository.remove(customer);
    }
}