import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customers";
import CustomerRepository from "../typeorm/repositories/Customers-Repository";

export class ListCustomerService {
    public async execute(): Promise<Customer[]> {
       const customerRepository = getCustomRepository(CustomerRepository);
       
       const customers = customerRepository.find();
    
        return customers;
    }
}

export default ListCustomerService