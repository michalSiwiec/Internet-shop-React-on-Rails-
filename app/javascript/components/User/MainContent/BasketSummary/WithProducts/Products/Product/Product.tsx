import React, {FC} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../../../../../../../../redux/basket/duck/actions'

import ChangeProductQuantity from './ChangeProductQuantity/ChangeProductQuantity'
import ProductDesciription from './ProductDescription/ProductDescription'
import ProductPicture from './ProductPicture/ProductPicture'

interface Props {product: any, quantity: number}

const Product:FC<Props> = ({product, quantity}) => {
    const dispatch = useDispatch()
    const productsInBasket = useSelector((state:any) => state.basketReducer.products)

    const removeProductFromBasket = (id:number, quantity:number) => {
        const URL = `/api/v1/products/${id}`
        const OPTIONS = {method: 'GET'}
        
        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(product => dispatch(actions.removeProductFromBasket(id, quantity, product.price)))
    }

    const updateQuantityProduct = (id:number, quantity:string) => {
        const URL = `/api/v1/products/${id}`
        const OPTIONS = {method: 'GET'}
        
        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(product => {
            const price = product.price
            const presentProductQuantity = productsInBasket.find(product => product.id === id).quantity
            const quantityAddedOrSubstractedProduct = parseInt(quantity) - presentProductQuantity

            dispatch(actions.changeProductQuantity(id, quantityAddedOrSubstractedProduct, price))
        })
    }
    
    return (
        <div className="product-flex-container">
            <ProductPicture product={product} removeProductFromBasket={removeProductFromBasket} quantity={quantity} />
            <ProductDesciription description={product.description} />
            <ChangeProductQuantity product={product} quantity={quantity} updateQuantityProduct={updateQuantityProduct} />
        </div>
    )
}

export default Product
