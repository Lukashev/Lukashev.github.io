export type Seller = 'Огого' | 'Laska Family' | 'Garda' | 'DG Home'

export interface Product {
    id: number | string
    img: string
    title: string
    rating?: number
    price: number
    discount?: number // percentage, for example 20 - 20% 
    color?: string
    material?: string
    sizes?: string
    mechanism?: string
    seller?: Seller
}