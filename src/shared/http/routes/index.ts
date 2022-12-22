import productsRouter from "@modules/products/routes/Create-Product.routes";
import { Router } from "express";

const routes = Router();

routes.use('/products', productsRouter);

export default routes