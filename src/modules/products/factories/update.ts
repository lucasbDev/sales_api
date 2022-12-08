import { UpdateProductController } from "../controllers";
import { ProductRepository } from "../repositories";
import { UpdateProductService } from "../services";
export const makeupdateProductController = (): UpdateProductController => {
    const repositoryupdateProduct = new ProductRepository()
    const updateProductService = new UpdateProductService(repositoryupdateProduct);
    const updateProductController = new UpdateProductController(updateProductService);
    return updateProductController   
}