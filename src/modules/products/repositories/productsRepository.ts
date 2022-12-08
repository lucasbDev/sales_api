import { ProductUseCase } from "@modules/products/interfaces";
import { Product } from "@modules/products/interfaces";
import { prisma } from '@shared/database'

export class ProductRepository implements  ProductUseCase {
    public async findByName(name: string): Promise<Product | null> {
        const result = await prisma.product.findFirst({
            where: {
                name
            }
        })

        return result 
    } 


    async exists(product: Product): Promise<boolean> {
        const result = await this.findByName(product.name)
            if (result != null) {
                return true
            }
                return false
    }
    async create(data: Product): Promise<void> {
             const result = await prisma.product.findFirst({
                where: {
                    name: data.name
                }
             })
             await this.exists(data)
             await prisma.product.create({
                data: {
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,

                }
             })
         }
         
            async findMany(): Promise<Product[]> {
                const returnProduct = await prisma.product.findMany()
                    if (!returnProduct) {
                    }
                    return returnProduct
                }

}