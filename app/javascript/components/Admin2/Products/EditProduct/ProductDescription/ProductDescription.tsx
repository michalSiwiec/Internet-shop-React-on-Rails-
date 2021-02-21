import React, {FC} from 'react'

import {validateDescription} from '../../../../../Helpers/Products/ProductsHelper'

interface Props {
    description: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setDescription:any
}

const ProductDescription:FC<Props> = ({description, setDescription}) => {
    return (
        <div className="edit-user-form__input-container">
            <div className="edit-user-form__input-container__label-container">
                <label>Opis produktu</label>
            </div>

            <div className="input-container__label-container">
                <input type="text" className="edit-user-form__input-container__input" value={description.value} onChange={(e) => validateDescription(e.target.value, setDescription, description)} />
            </div>
            
            <div className="mistake-info-container">
                {description.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default ProductDescription
