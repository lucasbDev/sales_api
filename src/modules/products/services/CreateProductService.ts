import AppError from "@shared/errors/AppError";
import { CipherNameAndProtocol } from "tls";
import { Product } from "../interfaces";
import { IRequest } from "../interfaces";
import { ProductRepository } from "../repositories/productsRepository";

export class CreateProductService {
    constructor( private productRepository: ProductRepository) {}
    async execute(name: string): Promise<Product | null> {
        const product = await this.productRepository.findByName(name);
        if (!product) {
            // throw new AppError('There is already a product with this name or not existis'){
            return null
        }


        // const product = this.productRepository.create({
        //     name,
        //     price,
        //     quantity,
        //     createdAt: null,
        //     updatedAt: null
        // });
        
        return product
    }
}