import React, {FC} from 'react'

import {validateDescription} from '../../../../../../../../Helpers/Products/ProductsHelper'

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
        <div className="input-container">
            <label>Opis produktu
                <input type="text" value={description.value} onChange={(e) => validateDescription(e.target.value, setDescription, description)} />
            </label>

            <div className="mistake-info-container">
                {description.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default ProductDescription
