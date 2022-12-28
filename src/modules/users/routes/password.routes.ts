import { Router } from "express";
import ForgotPswdController  from "../controllers/Forgort-pswd-controller"
import { celebrate, Joi, Segments } from 'celebrate'

const pswdRouter = Router();
const forgotPswdController = new ForgotPswdController();

pswdRouter.post('/forgot',
celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required()
        }
    }), 
   forgotPswdController.create
)

export default pswdRouter;