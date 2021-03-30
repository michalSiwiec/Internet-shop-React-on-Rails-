import React, {FC} from 'react'

import {IOrderDetails} from '../../../../../../../../TypeScript/Interfaces/Interfaces'

import InfoField from './InfoField/InfoField'

interface Props {orderDetail: IOrderDetails}

const OrderDetail:FC<Props> = ({orderDetail}) => {
    return (
        <div className="order-detail-container">
            <InfoField property="Nazwa produktu:" value={orderDetail.product_description} />
            <InfoField property="Cena" value={(orderDetail.product_price).toString()} />
            <InfoField property="Ilość" value={(orderDetail.quantity).toString()} />
        </div> 
    )
}

export default OrderDetail
