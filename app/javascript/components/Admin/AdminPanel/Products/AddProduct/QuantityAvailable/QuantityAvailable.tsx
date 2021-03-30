import React, {FC} from 'react'

interface Props {
    quantityAvailable: number,
    setQuantityAvailable: (quantityAvailable: number) => void
}

const QuantityAvailable:FC<Props> = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div className="add-user-form__input-container">
            <div className="add-user-form__input-container__label-container">
                <label className="add-user-form__input-container__label">Ilość na magazynie</label>
            </div>

            <div>
                <input type="number"
                    min="1" value={quantityAvailable} onChange={(e) => setQuantityAvailable(parseInt(e.target.value))}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    className="add-user-form__input-container__input"
                />
            </div>
        </div>
    )
}

export default QuantityAvailable
