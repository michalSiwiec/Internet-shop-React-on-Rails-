import React, {FC} from 'react'

import OrderCreatedHeader from './OrderCreatedHeader/OrderCreatedHeader'
import Products from './Products/Products'
import OrderSummary from './OrderSummary/OrderSummary'

interface Props {
    order: any
}

const Order:FC<Props> = ({order}) => {
    return (
        <div className="order">
            <OrderCreatedHeader dataCreated={order.dataCreated} />
            <Products details={order.details} />
            <OrderSummary orderPrice={order.orderPrice} />
        </div>
    )
}

export default Order
