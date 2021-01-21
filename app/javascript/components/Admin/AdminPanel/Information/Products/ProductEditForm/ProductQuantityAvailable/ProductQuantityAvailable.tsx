import React, {FC} from 'react'

interface Props {
    quantityAvailable: any,
    setQuantityAvailable: any
}

const ProductQuantityAvailable:FC<Props> = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div className="input-container">
            <label>Ilość na magazynie
                <input type="number" value={quantityAvailable.value} onChange={(e) => setQuantityAvailable({value: e.target.value, setted: true})}/>
            </label>
        </div>
    )
}

export default ProductQuantityAvailable
