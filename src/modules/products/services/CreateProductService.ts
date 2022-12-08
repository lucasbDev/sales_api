import AppError from "@shared/errors/AppError";
import { CipherNameAndProtocol } from "tls";
import { Product } from "../interfaces";
import { IRequest } from "../interfaces";
import { ProductRepository } from "../repositories/productsRepository";

export class CreateProductService {
    constructor( private productRepository: ProductRepository) {}
    async perform(data: Product) {
        const product = await this.productRepository.findByName(data.name);
        if (!product) {
            throw new AppError('There is already a product with this name or not exists')
        }

        const result = this.productRepository.create({
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        
        return result 
    }
}