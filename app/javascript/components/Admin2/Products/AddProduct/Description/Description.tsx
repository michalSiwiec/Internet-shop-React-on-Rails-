import React, {FC} from 'react'

import {validateDescription} from '../../../../../Helpers/Products/ProductsHelper'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    description: IFieldForm,
    setDescription: (description: IFieldForm) => void
}

const Description:FC<Props> = ({description, setDescription}) => {
    return (
        <div className="add-user-form__input-container">
            <div className="add-user-form__input-container__label-container">
                <label className="add-user-form__input-container__label">Opis produktu</label>
            </div>

            <div>
                <input type="text" className="add-user-form__input-container__input" value={description.value} onChange={(e) => validateDescription(e.target.value, setDescription, description)} />
            </div>
            
            <div className="mistake-info-container">
                {description.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Description
