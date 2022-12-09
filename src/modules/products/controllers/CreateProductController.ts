import { Request, Response } from "express";
import { CreateProductService } from "@modules/products/services";

export class CreateProductController {
    constructor(private readonly createProductService: CreateProductService) {}
    public async handle(req: Request, res: Response) {
        const product = req.body
        const result = await this.createProductService.execute(product)
        return res.json(result).status(201)        
    }
}