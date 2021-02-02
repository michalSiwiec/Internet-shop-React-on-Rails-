import React, {FC} from 'react'

interface Props {
    price: string,
    setPrice: any
}

const Price:FC<Props> = ({price, setPrice}) => {
    return (
        <div>
            <label>Cena
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
        </div>
    )
}

export default Price
