import { Router } from "express";
import CustomersController  from "../controllers/Customer-Controller"
import { celebrate, Joi, Segments } from 'celebrate'

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.post('/',
celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().required().email()
        },
    }), 
customersController.create)

customersRouter.delete('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
}), 
customersController.delete)


customersRouter.put('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
        [Segments.BODY]: {
             name: Joi.string().required(),
            email: Joi.string().required().email()
        }
}),
customersController.update)


customersRouter.get('/:id', 
celebrate ({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
    },
}),
customersController.show)


customersRouter.get('/', customersController.index)


export default customersRouter;