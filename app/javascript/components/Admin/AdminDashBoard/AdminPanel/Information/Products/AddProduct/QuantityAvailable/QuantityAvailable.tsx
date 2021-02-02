import React, {FC} from 'react'

interface Props {
    quantityAvailable: string,
    setQuantityAvailable: any
}

const QuantityAvailable = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div>
            <label>Ilość na magazynie
                <input type="number" min="1" value={quantityAvailable} onChange={(e) => setQuantityAvailable(e.target.value)} />
            </label>
        </div>
    )
}

export default QuantityAvailable
