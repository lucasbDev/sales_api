import AppError from "@shared/errors/AppError";
import { Product } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";

export class CreateProductService {
    constructor( private productRepository: ProductRepository) {}
    async perform(data: Product) {
        const product = await this.productRepository.findByName(data.name);
        if (!product) {
            throw new AppError('There is already a product with this name or not exists')
        }

        const result = this.productRepository.create({
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
        });
        
        return result 
    }
}