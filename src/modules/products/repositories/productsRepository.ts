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

    async finById(id: string): Promise< Product | null> {
        const result = await prisma.product.findUnique({
            where: {
                id
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
        await prisma.product.findFirst({
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
    async update(data: Product): Promise<Product> {
        const result = await prisma.product.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                // updatedAt: data.updatedAt
            },
        })
        return result
    }
    async delete (data: Product): Promise<Product> {
        const result = await prisma.product.delete({
            where: {
                id: data.id
            }
        })
        return result
    }

}