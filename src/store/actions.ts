export type StoreType = 'LIKE_PRODUCT' | 'BUY_PRODUCT'
export interface StoreAction {
    type: StoreType
    payload: object
}