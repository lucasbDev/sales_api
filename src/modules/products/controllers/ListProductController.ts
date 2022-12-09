import { Request, Response } from "express";
import { ListProductService } from "@modules/products/services";

export class ListProductController {
    constructor(private readonly listProductService: ListProductService) {}
    public async handle(request: Request,response: Response) {
        const result = await this.listProductService.execute()
        return response.json(result).status(200)        
    }
}