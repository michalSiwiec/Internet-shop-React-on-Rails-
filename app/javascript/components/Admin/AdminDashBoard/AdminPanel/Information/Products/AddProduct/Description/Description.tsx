import React, {FC} from 'react'

import {validateDescription} from '../../../../../../../../Helpers/Products/ProductsHelper'

interface Props {
    description: string,
    setDescription: any
}

const Description:FC<Props> = ({description, setDescription}) => {
    return (
        <div>
            <label>Opis produktu
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
        </div>
    )
}

export default Description
