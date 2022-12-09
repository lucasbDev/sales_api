import AppError from "@shared/errors/AppError";
import { Product, ProductService } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";

export class CreateProductService implements ProductService{
    constructor( private productRepository: ProductRepository) {}
    async execute(data: Product) {
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