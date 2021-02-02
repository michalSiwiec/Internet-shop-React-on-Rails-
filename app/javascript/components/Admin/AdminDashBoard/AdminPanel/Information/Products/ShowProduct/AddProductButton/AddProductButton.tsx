import React from 'react'

import {Link} from 'react-router-dom'

const AddProductButton = () => {
    return (
        <Link to="/admin/addProduct/">
            <button>Dodaj produkt</button>
        </Link>
    )
}

export default AddProductButton
