import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props{
    editProduct: any
}

const EditButton:FC<Props> = ({editProduct}) => {
    return(
        <Link to="/admin/">
            <button onClick={(e) => editProduct(e)}>Edytuj</button>
        </Link>
    )
}

export default EditButton
