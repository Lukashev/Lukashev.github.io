import React, { useContext } from 'react'
import { ContextApp } from '../store/reducer'
import InfoPanel from './InfoPanel'
import Typography from './Typography'
import { StoreState } from '../interfaces/StoreState'
import { Product as ProductItem } from '../interfaces/Product'
import Product from './Product'

const AppMain = (): JSX.Element => {
    const { state } = useContext(ContextApp) as { state: StoreState }
    const { productLabelList, productList } = state
    const labelList = productLabelList.map((label: string, i: number) => {
        return (
            <Typography
                key={i}
                size={13}
                fontWeight={600}
            >
                {label}
            </Typography>
        )
    })
    return (
        <div className='app-main'>
            <div className="app-main__sidebar">
                <InfoPanel list={labelList} />
            </div>
            <div className="app-main__product-list">
                {productList.map((productItem: ProductItem, i: number) => <Product key={i} product={productItem} />)}
            </div>
        </div>
    )
}

export default AppMain

