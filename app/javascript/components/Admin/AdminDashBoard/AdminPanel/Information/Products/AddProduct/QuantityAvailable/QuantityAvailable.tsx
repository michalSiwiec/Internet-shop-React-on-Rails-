import React, {FC} from 'react'

interface Props {
    quantityAvailable: number,
    setQuantityAvailable: any
}

const QuantityAvailable:FC<Props> = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div>
            <label>Ilość na magazynie
                <input type="number"
                    min="1" value={quantityAvailable} onChange={(e) => setQuantityAvailable(e.target.value)}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                />
            </label>
        </div>
    )
}

export default QuantityAvailable