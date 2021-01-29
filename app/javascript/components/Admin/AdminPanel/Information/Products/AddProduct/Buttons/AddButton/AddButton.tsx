import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    addProduct: any
}

const AddButton = ({addProduct}) => {
    return (
        <Link to="/admin/">
            <button onClick={addProduct}>Dodaj</button>
        </Link>
    )
}

export default AddButton
