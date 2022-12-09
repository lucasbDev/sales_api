import { Product, ProductService } from "@modules/products/interfaces";
import { ProductRepository } from "@modules/products/repositories";

export class ListProductService implements ProductService {
    constructor( private productRepository: ProductRepository) {}
    async execute(): Promise<Product[]> {
        const result = await this.productRepository.findMany();    
        return result 
    }
}