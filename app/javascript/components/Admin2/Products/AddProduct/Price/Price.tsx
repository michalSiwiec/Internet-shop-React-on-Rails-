import React, {FC} from 'react'

interface Props {
    price: number,
    setPrice: (price: number) => void
}

const Price:FC<Props> = ({price, setPrice}) => {
    return (
        <div>
            <label>Cena
                <input type="number"
                    min="1"
                    step="0.1"
                    value={price} onChange={(e) => setPrice(parseInt(e.target.value))}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                />
            </label>
        </div>
    )
}

export default Price
