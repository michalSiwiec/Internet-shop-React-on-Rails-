import React, {FC} from 'react'

import InfoField from './InfoField/InfoField'

interface Props {orderDetail: any}

const OrderDetail:FC<Props> = ({orderDetail}) => {
    return (
        <div>
            <InfoField value={`Nazwa produktu: ${orderDetail.product_description}`} />
            <InfoField value={`Cena: ${orderDetail.product_price}`} />
            <InfoField value={`Ilość: ${orderDetail.quantity}`} />
        </div> 
    )
}

export default OrderDetail
