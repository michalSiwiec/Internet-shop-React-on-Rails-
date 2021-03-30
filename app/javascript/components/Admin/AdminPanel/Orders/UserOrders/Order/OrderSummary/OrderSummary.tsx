import React, {FC} from 'react'

interface Props {orderPrice: number}

const OrderSummary:FC<Props> = ({orderPrice}) => {
    return(
        <div className="summary-container">
            <p className="summary-container__span">{`Razem: ${orderPrice}`}</p>
        </div>
    )
}

export default OrderSummary
