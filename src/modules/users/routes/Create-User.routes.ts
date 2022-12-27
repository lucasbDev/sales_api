import { Router } from "express";
import UsersController  from "../controllers/User-Controller"
import { celebrate, Joi, Segments } from 'celebrate'
import isAuth from "../middlewares/isAuth";

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

usersRouter.get('/', isAuth, usersController.index)


export default usersRouter;