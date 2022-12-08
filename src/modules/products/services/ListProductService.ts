import { Product } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";

export class ListProductService {
    constructor( private productRepository: ProductRepository) {}
    async perform(): Promise<Product[]> {
        const result = await this.productRepository.findMany();    
        return result 
    }
}