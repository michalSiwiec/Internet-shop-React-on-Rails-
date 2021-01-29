import React, {FC} from 'react'

interface Props {
    quantityAvailable: string,
    setQuantityAvailable: any
}

const QuantityAvailable = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div>
            <input type="number" min="1" placeholder="Ilość na magazynie" value={quantityAvailable} onChange={(e) => setQuantityAvailable(e.target.value)} />
        </div>
    )
}

export default QuantityAvailable
