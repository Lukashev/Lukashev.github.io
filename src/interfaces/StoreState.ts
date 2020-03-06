import { Product } from "./Product";

export interface StoreState {
    productList: Product[]
    productLabelList: string[]
    loadedProducts: Product[]
}