import React, {FC} from 'react'

interface Props {
    quantityAvailable: number,
    setQuantityAvailable: (quantityAvailable: number) => void
}

const ProductQuantityAvailable:FC<Props> = ({quantityAvailable, setQuantityAvailable}) => {
    return (
        <div className="edit-user-form__input-container">
            <div className="edit-user-form__input-container__label-container">
                <label className="edit-user-form__input-container__label">Ilość na magazynie</label>
            </div>

            <div>
                <input type="number"
                    min="1"
                    value={quantityAvailable}
                    onChange={(e) => setQuantityAvailable(parseInt(e.target.value))}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    className="edit-user-form__input-container__input"
                />
            </div>
        </div>
    )
}

export default ProductQuantityAvailable
