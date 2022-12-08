import AppError from "@shared/errors/AppError";
import { Product } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";



export class DeleteProductService {
    constructor( private productRepository: ProductRepository) {}
    public async perform(data: Product ) {
        const {
         id,
         name,
         price,
         quantity,
         createdAt,
         updatedAt
        } = data
        const productExists = await this.productRepository.finById(id);
        if(!productExists) {
            throw new AppError('Product not found!')
        }
        const result = await this.productRepository.delete({
            id,
            name,
            price,
            quantity,
            createdAt,
            updatedAt
        })
        return result
    }   
}    
