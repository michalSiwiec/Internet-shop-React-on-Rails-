import React, {FC} from 'react'

interface Props {
    price: number,
    setPrice: any
}

const ProductPrice:FC<Props> = ({price, setPrice}) => {

    return (
        <div className="input-container">
            <label>Cena
                <input type="number"
                    min="0.1"
                    step="0.1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                />
            </label>
        </div>
    )
}

export default ProductPrice
