import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/product-repositoy";

export class ListProductService {
    public async execute(): Promise< Product[]> {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.find()

        return product
    }
}