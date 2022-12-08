import { Router } from "express";
import { makeCreateProductController, makeDeleteProductController, makelistProductController, makeshowProductController, makeupdateProductController } from "@modules/products/factories"

const productsRouter = Router();

productsRouter.get('/', makelistProductController().handle)
productsRouter.get('/:id', makeshowProductController().handle)

productsRouter.post('/', makeCreateProductController().handle)
productsRouter.put('/:id', makeupdateProductController().handle)
productsRouter.delete('/:id', makeDeleteProductController().handle)