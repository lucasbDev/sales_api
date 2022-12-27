import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from '@config/auth'

export default function isAuth(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token JWT inválido!');   
    }
    const [, token] = authHeader.split(' ');

    try { 
        const decodeToken = verify(token,authConfig.jwt.secret)
        return next()
    }catch{
        throw new AppError('Você precisa estar autenticado!')
    }
}