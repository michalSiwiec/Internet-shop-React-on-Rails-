import React from 'react'

import {useSelector} from 'react-redux'

import WithoutProducts from './WithoutProducts/WithoutProducts'
import WithProducts from './WithProducts/WithProducts'

const BasketSummary = () => {
    const productsInBasket = useSelector((state:any) => state.basketReducer.products)
    
    return (
        <div className="basket-summary-container">
            {productsInBasket.length == 0 ? <WithoutProducts /> : <WithProducts />}
        </div>
    )
}

export default BasketSummary
