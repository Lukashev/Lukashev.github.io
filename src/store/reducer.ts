import React from "react"
import { StoreState } from "../interfaces/StoreState";
import { StoreAction } from "./actions";
import { productList, productLabelList } from "./mock";

export const ContextApp = React.createContext({});

export const initialState: StoreState = {
    productList: productList.concat(productList),
    loadedProducts: [],
    productLabelList
};

export const reducer = (state: StoreState, action: StoreAction): StoreState => {
    /* it's not necessary, just for example */
    switch (action.type) {
        case 'SET_LOADED_PRODUCTS':
            return {
                ...state,
                loadedProducts: action.payload
            }
        default:
            return state
    }
};