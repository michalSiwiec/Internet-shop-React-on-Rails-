import React, {FC} from 'react'

import {validateDescription} from '../../../../../Helpers/Products/ProductsHelper'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    description: IFieldForm,
    setDescription: (description: IFieldForm) => void
}

const Description:FC<Props> = ({description, setDescription}) => {
    return (
        <div>
            <label>Opis produktu
                <input type="text" value={description.value} onChange={(e) => validateDescription(e.target.value, setDescription, description)} />
            </label>

            <div className="mistake-info-container">
                {description.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Description
