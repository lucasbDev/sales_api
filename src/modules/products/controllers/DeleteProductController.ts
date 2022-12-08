import { Request, Response } from "express";
import { DeleteProductService } from "@modules/products/services";

export class DeleteProductController {
    constructor(private readonly deleteProductService: DeleteProductService) {}
    public async handle(req: Request, res: Response) {
        const product = req.body
        await this.deleteProductService.perform(product)
        return res.json([])     
    }
}