import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customers";
import   CustomersRepository  from "../typeorm/repositories/Customers-Repository";

interface IRequest {
    id: string
    name: string;
    email: string;
}

export class UpdateCustomerService {
    public async execute({
        id,
        email,
        name
    }: IRequest): Promise< Customer > {
        const customersRepository = getCustomRepository( CustomersRepository );

        const customer = await customersRepository.findById(id)

        if (!customer) {
            throw new AppError('Cliemte não ncontrado!');
        }
        const customerUpdateEmail = await customersRepository.findByEmail(email);

        if(customerUpdateEmail && customerUpdateEmail.id != id) {
            throw new AppError('Esse email já está sendo utilizado!');
        }
        customer.name = name;
        customer.email = email;
        
        
        await customersRepository.save(customer);

        return customer;
    }
}