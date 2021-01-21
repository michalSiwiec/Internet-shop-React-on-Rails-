import React, {FC} from 'react'

interface Props{
    informationPart: any
}

const OrdersList:FC<Props> = ({informationPart}) => {
    return (
        <div className="order-list-container" ref={informationPart.ordersList}>
            <h2>Orders List</h2>
        </div>
    )
}

export default OrdersList
