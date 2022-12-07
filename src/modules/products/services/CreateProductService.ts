import AppError from "@shared/errors/AppError";
import { CipherNameAndProtocol } from "tls";
import { Product } from "../interfaces";
import { IRequest } from "../interfaces";
import { ProductRepository } from "../repositories/productsRepository";

export class CreateProductService {
    constructor( private productRepository: ProductRepository) {}
    async execute({name, price, quantity}: IRequest): Promise<Product | null> {
        const productExists = await this.productRepository.findByName(CreateProductService.name);
        if (productExists) {
            throw new AppError('There is already a product with this name');  
        }

        const product = this.productRepository.create({
            name,
            price,
            quantity,
            createdAt: null,
            updatedAt: null
        });
        
        return product
    }
}