import AppError from "@shared/errors/AppError"
import { getCustomRepository } from "typeorm"
import Customer from "../typeorm/entities/Customers"
import CustomerRepository from "../typeorm/repositories/Customers-Repository"

interface IRequest {
    name: string
    email: string
}

export class CreateCustomerService {
    public async execute({ name, email }: IRequest): Promise<Customer> {
        const customerRepository = getCustomRepository(CustomerRepository);
        const emailExists = await customerRepository.findByEmail(email);

        if(emailExists) {
            throw new AppError('Esse e-mail já está em uso')
        }
        
        const result = customerRepository.create({
            name,
            email
        })

        await customerRepository.save(result);

        return result;
    }
}
