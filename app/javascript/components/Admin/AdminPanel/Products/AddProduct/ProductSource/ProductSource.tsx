import React, {FC} from 'react'

interface Props {setSource: (source: string) => void}

const ProductSource:FC<Props> = ({setSource}) => {
    return (
        <div className="add-user-form__input-container">
            <div className="add-user-form__input-container__label-container">
                <label htmlFor="productPicture" className="add-user-form__input-container__label">Wybierz zdjęcie</label>
            </div>

            <div>
                <input type="file"
                    name="productPicture"
                    value="" onChange={(e) => setSource(e.target.value)}
                    className="add-user-form__input-container__input"
                />
            </div>  
        </div>
    )
}

export default ProductSource
