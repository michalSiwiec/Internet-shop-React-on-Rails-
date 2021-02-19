import React from 'react'

import {useSelector} from 'react-redux'

import {IReduxState} from '../../../../../TypeScript/Interfaces/Interfaces'

import WithoutProducts from './WithoutProducts/WithoutProducts'
import WithProducts from './WithProducts/WithProducts'

interface ProductFromBasket{id: number, quantity: number}

const BasketSummary = () => {
    const productsInBasket: Array<ProductFromBasket> = useSelector((state: IReduxState) => state.basketReducer.products)

    return (
        <div className="basket-summary-container">
            {productsInBasket.length == 0 ? <WithoutProducts /> : <WithProducts />}
        </div>
    )
}

export default BasketSummary
