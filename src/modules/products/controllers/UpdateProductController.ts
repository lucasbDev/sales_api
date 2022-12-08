import { Request, Response } from "express";
import { UpdateProductService } from "@modules/products/services";

export class UpdateProductController {
    constructor(private readonly updateProductService: UpdateProductService) {}
    public async handle(request: Request,response: Response) {
        const { id } = request.params
        const { name, price, quantity, createdAt, updatedAt } = request.body
        const result = await this.updateProductService.perform({
            id,
            name,
            price,
            quantity,
            createdAt,
            updatedAt 
        })
        return response.json(result).status(201)        
    }
}