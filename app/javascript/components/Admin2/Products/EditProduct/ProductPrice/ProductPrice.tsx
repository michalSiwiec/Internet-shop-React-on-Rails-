import React, {FC} from 'react'

interface Props {
    price: number,
    setPrice: (price: number) => void
}

const ProductPrice:FC<Props> = ({price, setPrice}) => {
    return (
        <div className="edit-user-form__input-container">
            <div className="edit-user-form__input-container__label-container">
                <label className="edit-user-form__input-container__label">Cena</label>
            </div>

            <div>
                <input type="number"
                    min="1"
                    step="0.1"
                    defaultValue={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    className="edit-user-form__input-container__input"
                />
            </div>
        </div>
    )
}

export default ProductPrice
