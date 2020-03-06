import React, { memo, useCallback, Fragment } from 'react'
import { Product as ProductItem, Seller } from '../../interfaces/Product'
import StarRatingComponent from 'react-star-rating-component'
import Typography from '../Typography'
import InfoPanel from '../InfoPanel'
import Button from '../Button'
/* import heart, basket svg */
import heartSVG from '../../images/heart.svg'
import basketSVG from '../../images/basket.svg'
import './styles.scss'

interface Props {
    product: ProductItem
}

const ProductRating = (props: { starCount: number, value: number, editing: boolean }): JSX.Element => {
    const { value } = props
    return (
        <div className="product-item__rating">
            <StarRatingComponent name='product_rating' {...props} />
            <Typography fontWeight={600} size={15}>
                {value}
            </Typography>
        </div>
    )
}

const ProductPrice = (props: Partial<ProductItem>): JSX.Element => {
    const { price = 0, discount = 0 } = props
    const hasDiscount = discount > 0
    return (
        <div className="product-item__price" >
            <Typography
                size={18}
                fontWeight={600}
                color={hasDiscount ? '#CC0000' : '#000000'}
            >
                {`${hasDiscount ? price - price * discount / 100 : price} P`}
            </Typography>
            {hasDiscount && (
                <Typography size={15} color={`#948F88`} textDecoration={'line-through'}>
                    {`${price} P`}
                </Typography>
            )}
        </div >
    )
}

const ProductSimpleItem = (props: Partial<ProductItem>): JSX.Element => {
    return <Typography>{Object.values(props)[0]}</Typography>
}

const ProductSeller = (props: { seller: Seller }): JSX.Element => {
    const { seller } = props
    return (
        <a href='/' className='product-item__link'>
            <Typography>
                {seller}
            </Typography>
        </a>
    )
}

const ProductActions = (props: { canAddFavorite: boolean }): JSX.Element => {
    const { canAddFavorite } = props
    return (
        <div className="product-item__actions">
            {canAddFavorite && <Button
                width={51}
                border={`2px solid #FF9F9F`}
            >
                <img src={heartSVG} alt="heart_svg" />
            </Button>}
            <Button width={canAddFavorite ? 117 : '100%'} backgroundColor={`#009900`}>
                <Fragment>
                    <img
                        src={basketSVG}
                        alt="basket_svg"
                        className="product-item__actions__basket-svg"
                    />
                    <Typography color={`#FFFFFF`}>
                        {`Купить`}
                    </Typography>
                </Fragment>
            </Button>
        </div>
    )
}

export const Product = memo((props: Props) => {
    const {
        product: {
            img,
            title,
            rating = 0,
            color,
            material,
            sizes,
            mechanism,
            canAddFavorite,
            seller = 'Garda'
        }
    } = props
    const setList = useCallback(
        () => {
            return [
                <ProductRating starCount={5} value={rating} editing={false} />,
                <ProductPrice {...props.product} />,
            ]
                .concat([{ color }, { material }, { sizes }, { mechanism }].map(value => <ProductSimpleItem {...value} />))
                .concat(<ProductSeller seller={seller} />)
                .concat(<ProductActions canAddFavorite={canAddFavorite} />)
        }, [])
    return (
        <div className='product-item'>
            <div className="product-item__image-block">
                <img
                    src={img}
                    className='img-responsive'
                    alt='preview' />
            </div>
            <div className="product-item__title">
                <Typography fontWeight={600}>{title}</Typography>
            </div>
            <InfoPanel list={setList()} />
        </div>
    )
})
