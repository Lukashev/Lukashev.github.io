import React from "react"
import { StoreState } from "../interfaces/StoreState";
import { StoreAction } from "./actions";
import { productList, productLabelList } from "./mock";

export const ContextApp = React.createContext({});

export const initialState = {
    productList: productList.concat(productList),
    productLabelList
};

export const reducer = (state: StoreState, action: StoreAction) => {
    /* it's not necessary, just for example */
    switch (action.type) {
        case 'LIKE_PRODUCT': 
            return {
                ...state,
                ...action.payload
            }    
        default:
            return state
    }
};