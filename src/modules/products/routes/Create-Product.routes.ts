import { Router } from "express";
import ProductsController  from "../controllers/Product-Controller"
import { celebrate, Joi, Segments } from 'celebrate'

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/',
celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required(),
        },
    }), 
productsController.create)

productsRouter.delete('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
}), 
productsController.delete)


productsRouter.put('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required()
        },
}),
productsController.update)


productsRouter.get('/:id', 
celebrate ({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
}),
productsController.show)


productsRouter.get('/', productsController.index)


export default productsRouter;