import { Product } from '@modules/products/interfaces'

export interface ProductUseCase {
    findByName(name: string): Promise<Product | null>
}