import AppError from "@shared/errors/AppError";
import { CipherNameAndProtocol } from "tls";
import { Product } from "../interfaces";
import { IRequest } from "../interfaces";
import { ProductRepository } from "../repositories/productsRepository";

export class LisProductService {
    constructor( private productRepository: ProductRepository) {}
    async perform(): Promise<Product[]> {
        const result = await this.productRepository.findMany();    
        return result 
    }
}