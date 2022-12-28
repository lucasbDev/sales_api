import { Router } from "express";
import UsersController  from "../controllers/User-Controller"
import { celebrate, Joi, Segments } from 'celebrate'
import isAuth from "../../../shared/http/middlewares/isAuth";
import multer from 'multer';
import UploadConfig from '@config/upload'
import UserAvatarController from "../controllers/UserAvatarController";

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController
const upload = multer(UploadConfig)

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

usersRouter.patch(
    '/avatar',
    isAuth,
    upload.single('avatar'),
    userAvatarController.update)


export default usersRouter;