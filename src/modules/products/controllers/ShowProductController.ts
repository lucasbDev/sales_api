import { Request, Response } from "express";
import { ShowProductService } from "@modules/products/services";

export class ShowProductController {
    constructor(private readonly showProductService: ShowProductService) {}
    public async handle(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.showProductService.execute(id)
        return res.json(result).status(200)        
    }
}