import productsRouter from "@modules/products/routes/Create-Product.routes";
import usersRouter from "@modules/users/routes/Create-User.routes";
import sessionsRouter from "@modules/users/routes/Sessions.routes";
import { Router } from "express";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes