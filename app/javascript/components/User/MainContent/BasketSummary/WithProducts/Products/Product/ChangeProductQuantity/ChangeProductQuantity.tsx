import React, {FC} from 'react'

import Quantity from './Quantity/Quantity'
import Ornament from './Ornament/Ornament'
import Header from './Header/Header'
import SummaryPrice from './SummaryPrice/SummaryPrice'

interface Props {
    product: any
    updateQuantityProduct: any,
    quantity: number
}

const ChangeProductQuantity:FC<Props> = ({product, updateQuantityProduct, quantity}) => {
    return (
        <div className="change-quantity-container">
            <Header />
            <Quantity product={product} updateQuantityProduct={updateQuantityProduct} quantity={quantity} />

            <div className="summary-price-container">
                <SummaryPrice price={product.price} quantity={quantity} />
                <Ornament />
            </div>
        </div>
    )
}

export default ChangeProductQuantity
