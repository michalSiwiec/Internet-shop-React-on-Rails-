import React, {FC} from 'react'

interface Props {
    quantityAvailable: number,
    setQuantityAvailable: (quantityAvailable: number) => void
}

const ProductQuantityAvailable:FC<Props> = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div className="input-container">
            <label>Ilość na magazynie
                <input type="number"
                    min="1"
                    value={quantityAvailable}
                    onChange={(e) => setQuantityAvailable(parseInt(e.target.value))}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                />
            </label>
        </div>
    )
}

export default ProductQuantityAvailable
