import React, {FC} from 'react'

interface Props {orderPrice: number}

const OrderSummary:FC<Props> = ({orderPrice}) => {
    return(
        <div>
            <p>{`Razem: ${orderPrice}`}</p>
        </div>
    )
}

export default OrderSummary
