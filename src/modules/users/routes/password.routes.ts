import { Router } from "express";
import ForgotPswdController  from "../controllers/Forgort-pswd-controller"
import ResetPswdController  from "../controllers/Reset-pswd-controller"
import { celebrate, Joi, Segments } from 'celebrate'

const pswdRouter = Router();
const forgotPswdController = new ForgotPswdController();
const resetPswdController = new ResetPswdController()

pswdRouter.post('/forgot',
celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required()
        }
    }), 
   forgotPswdController.create
);

pswdRouter.post('/reset',
celebrate({
        [Segments.BODY]: {
            token: Joi.string().uuid().required(),
            password: Joi.string().required(),
            password_confirmation: Joi.string().required().valid(Joi.ref('password'))
        }
    }), 
   resetPswdController.create
)

export default pswdRouter;