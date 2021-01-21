import React, {FC} from 'react'

interface Props{
    informationPart: any
}

const OrdersDiagrams:FC<Props> = ({informationPart}) => {
    return (
        <div className="orders-diagram-container" ref={informationPart.ordersDiagram}>
            <h2>Orders Diagram</h2>
        </div>
    )
}

export default OrdersDiagrams
