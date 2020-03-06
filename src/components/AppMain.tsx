import React, { useContext, createRef, RefObject, useEffect, useState } from 'react'
import { ContextApp } from '../store/reducer'
import InfoPanel from './InfoPanel'
import Typography from './Typography'
import { StoreState } from '../interfaces/StoreState'
import { Product as ProductItem } from '../interfaces/Product'
import Product from './Product'

const AppMain = (): JSX.Element => {
    const ref: RefObject<HTMLDivElement> = createRef()
    const { state, dispatch } = useContext(ContextApp) as { state: StoreState, dispatch: Function }
    const { productLabelList, productList, loadedProducts } = state
    const [loadMore, setLoadMore] = useState(true);

    const onScroll = (e: any) => {
        const { target: { scrollWidth, scrollLeft, clientWidth } } = e
        const scrollPosition = scrollWidth - scrollLeft
        if (scrollPosition - 1 < clientWidth) setLoadMore(true)
    }

    useEffect(() => {
        getData(loadMore)
        setLoadMore(false)
    }, [loadMore])

    useEffect(() => {
        const current = ref.current
        if (current) current.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const getData = (load: boolean) => {
        /* There can be API call */
        if (load) {
            dispatch({
                type: 'SET_LOADED_PRODUCTS',
                payload: loadedProducts.concat(productList.slice(loadedProducts.length, loadedProducts.length + 4))
            })
            setLoadMore(false)
        }
    }

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
            <div className="app-main__product-list" ref={ref}>
                {loadedProducts.map((productItem: ProductItem, i: number) => {
                    return <Product
                        key={i}
                        product={productItem}
                    />
                })}
            </div>
        </div>
    )
}

export default AppMain

