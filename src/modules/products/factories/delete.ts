import { DeleteProductController } from "../controllers";
import { ProductRepository } from "../repositories";
import { DeleteProductService } from "../services";
export const makeDeleteProductController = (): DeleteProductController => {
    const repositoryDeleteProduct = new ProductRepository()
    const deleteProductService = new DeleteProductService(repositoryDeleteProduct);
    const deleteProductController = new DeleteProductController(deleteProductService);
    return deleteProductController   
}