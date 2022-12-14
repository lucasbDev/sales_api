import Express, { NextFunction, Request, Response }  from "express";
import 'express-async-errors'
import cors from 'cors';
import { errors } from 'celebrate'
import routes from "./routes";
import UploadConfig from "@config/upload"
import AppError from "@shared/errors/AppError";
import '@shared/typeorm';

const app = Express();

app.use(cors());
app.use(Express.json());
app.use('/files', Express.static(UploadConfig.directory))
app.use(routes)
app.use(errors());

app.use((error: Error, request:Request, response:Response,next: NextFunction,) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        })
    }

    console.log(error)
     return response.status(500).json({
            status: 'error',
            message: 'Internal server error!',
        })
    },
);

app.listen(3333, () => {
    console.log("server runinn 🔥")
})
