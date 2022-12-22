import { Router } from "express";
import {
    CreateProductController,
    DeleteProductController,
    ListProductController,
    ShowProductController,
    UpdateProductController } 
from "../controllers/index"

const productsRouter = Router();
const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const showProductController = new ShowProductController();
const updateProductController = new UpdateProductController();

productsRouter.post('/', createProductController.create)
productsRouter.delete('/id:', deleteProductController.delete)
productsRouter.get('/', listProductController.index)
productsRouter.put('/id:', updateProductController.update)
productsRouter.get('/id:', showProductController.show)


export default productsRouter;