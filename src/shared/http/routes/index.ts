import productsRouter from "@modules/products/routes/Create-Product.routes";
import usersRouter from "@modules/users/routes/Create-User.routes";
import { Router } from "express";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);

export default routes