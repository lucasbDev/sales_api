import { Router } from "express";
import UsersController  from "../controllers/User-Controller"
import { celebrate, Joi, Segments } from 'celebrate'

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/',
celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        },
    }), 
    usersController.create
)

usersRouter.get('/', usersController.index)


export default usersRouter;