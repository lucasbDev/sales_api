import { Router } from "express";
import ProductsController  from "../controllers/Product-Controller"

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create)
productsRouter.delete('/:id', productsController.delete)
productsRouter.get('/', productsController.index)
productsRouter.put('/:id', productsController.update)
productsRouter.get('/:id', productsController.show)


export default productsRouter;