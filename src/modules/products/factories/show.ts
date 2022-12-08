import { ShowProductController } from "../controllers";
import { ProductRepository } from "../repositories";
import { ShowProductService } from "../services";
export const makeshowProductController = (): ShowProductController => {
    const repositoryshowProduct = new ProductRepository()
    const showProductService = new ShowProductService(repositoryshowProduct);
    const showProductController = new ShowProductController(showProductService);
    return showProductController   
}