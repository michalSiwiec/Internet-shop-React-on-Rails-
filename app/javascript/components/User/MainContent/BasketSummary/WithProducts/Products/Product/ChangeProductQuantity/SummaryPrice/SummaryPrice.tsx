import React, {FC} from 'react'

interface Props{price: number, quantity: number}

const SummaryPrice:FC<Props> = ({price, quantity}) => {
    return (
        <div>
            <p>Razem: <span className="summary-price-container__price">{`${quantity * price}zł`}</span></p>
        </div>
    )
}

export default SummaryPrice
