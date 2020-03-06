import { Product } from "../interfaces/Product";

export type StoreType = 'SET_LOADED_PRODUCTS'

export interface StoreAction {
    type: StoreType
    payload: Product[]
}