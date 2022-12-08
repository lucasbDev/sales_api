import { ListProductController } from "../controllers";
import { ProductRepository } from "../repositories";
import { ListProductService } from "../services";
export const makelistProductController = (): ListProductController => {
    const repositorylistProduct = new ProductRepository()
    const listProductService = new ListProductService(repositorylistProduct);
    const listProductController = new ListProductController(listProductService);
    return listProductController   
}