import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customers";
import CustomerRepository from "../typeorm/repositories/Customers-Repository";

interface IRequest {
    id: string
}

export class ShowCustomerService {
    public async execute({ id }: IRequest): Promise< Customer > {
        const customersRepository = getCustomRepository( CustomerRepository );

        const customer = await customersRepository.findById(id)

        if (!customer) {
            throw new AppError('Usuário não ncontrado!');
        }

        return customer;
    }
}