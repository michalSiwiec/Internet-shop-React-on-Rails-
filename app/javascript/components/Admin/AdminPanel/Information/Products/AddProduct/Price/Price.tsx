import React, {FC} from 'react'

interface Props {
    price: string,
    setPrice: any
}

const Price:FC<Props> = ({price, setPrice}) => {
    return (
        <div>
            <input type="number" placeholder="Cena" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
    )
}

export default Price
