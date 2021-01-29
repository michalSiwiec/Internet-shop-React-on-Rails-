import React, {FC} from 'react'

import {validateDescription} from '../../../../../../../Helpers/Products/ProductsHelper'

interface Props {
    description: string,
    setDescription: any
}

const Description:FC<Props> = ({description, setDescription}) => {

    validateDescription()

    return (
        <div>
            <input type="text" placeholder="Opis produktu" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
    )
}

export default Description
