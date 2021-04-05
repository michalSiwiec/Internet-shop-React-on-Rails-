import React, {FC} from 'react'

import {IOrderDetails} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import Header from './Header/Header'
import OrderDetail from './OrderDetail/OrderDetail'
import Summary from './Summary/Summary'

interface Props {orderDetails: Array<IOrderDetails>, price: number}

const OrderDetails:FC<Props> = ({orderDetails, price}) => {
    return (
        <div className="order-details-container">
            <Header />
            {orderDetails.map((order_detail: any) => <OrderDetail orderDetail={order_detail} key={`commonOrderContainer${order_detail.product_description}`} />)}
            <Summary value={`Razem: ${price} zł`} />
        </div>
    )
}

export default OrderDetails