import productsRouter from "@modules/products/routes/Create-Product.routes";
import usersRouter from "@modules/users/routes/Users.routes";
import sessionsRouter from "@modules/users/routes/Sessions.routes";
import pswdRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/Profile.routes";
import { Router } from "express";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', pswdRouter);
routes.use('/profile', profileRouter);

export default routes