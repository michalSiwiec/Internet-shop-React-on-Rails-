import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    addProduct: any
}

const AddButton = ({addProduct}) => {
    return (
        <Link to="/admin/">
            <button onClick={(e) => addProduct(e)}>Dodaj</button>
        </Link>
    )
}

export default AddButton
