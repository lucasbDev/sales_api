import { CreateProductController } from "../controllers";
import { ProductRepository } from "../repositories";
import { CreateProductService } from "../services";
export const makeCreateProductController = (): CreateProductController => {
    const repositoryCreateProduct = new ProductRepository()
    const createProductService = new CreateProductService(repositoryCreateProduct);
    const createProductController = new CreateProductController(createProductService);
    return createProductController   
}