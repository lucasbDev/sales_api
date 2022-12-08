import AppError from "@shared/errors/AppError";
import { Product } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";

export class ShowProductService {
    constructor( private productRepository: ProductRepository) {}
    async perform(id: string): Promise<Product | null> {
        const result = await this.productRepository.finById(id);
        if (!result) {
            throw new AppError('Product not found!')
        }    
        return result;
    }
}