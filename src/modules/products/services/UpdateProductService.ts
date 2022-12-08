import AppError from "@shared/errors/AppError";
import { Product } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";


export class UpdateProductService {
    constructor( private productRepository: ProductRepository) {}
    public async perform (data: Product): Promise<Product> {
        const product = await this.productRepository.finById(data.id);
            if (!product){
                throw new AppError('Product not found!')
            }
        const productExists = await this.productRepository.findByName(data.name);
            if (!productExists && data.name != product.name){
                throw new AppError('This name cant be used!')
            }
        const result = await this.productRepository.update({
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            id: data.id
        })    
        return result
    }
}