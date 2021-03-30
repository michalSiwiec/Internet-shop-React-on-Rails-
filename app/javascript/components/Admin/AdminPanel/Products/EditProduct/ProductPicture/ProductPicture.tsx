import React, {FC} from 'react'

interface ProductSource{
    value: string,
    setted: boolean
}

interface Props {
    setSource: (source: any) => void,
    source: ProductSource
}

const ProductPicture:FC<Props> = ({setSource}) => {
    return (
        <div className="edit-user-form__input-container">
            <div className="edit-user-form__input-container__label-container">
                <label htmlFor="productPicture" className="edit-user-form__input-container__label">Wybierz zdjęcie</label>
            </div>

            <div>
                <input type="file"
                    name="productPicture"
                    value="" onChange={(e) => setSource(e.target.value)}
                    className="edit-user-form__input-container__input"
                />
            </div>
        </div>
    )
}

export default ProductPicture
