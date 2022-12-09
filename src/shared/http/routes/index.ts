import { productsRouter } from "@modules/products/routes/products.routes";
import { response, Router } from "express";
import { request } from "http";


const routes = Router();

routes.use('/products', productsRouter);

export default routes