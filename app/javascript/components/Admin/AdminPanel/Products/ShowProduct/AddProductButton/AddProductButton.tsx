import React from 'react'

import {Link} from 'react-router-dom'

const AddProductButton = () => {
    return (
        <div className="add-product-button-container">
            <Link to="/admin/Products/addProduct/">
                <button className="add-product-button-container__button">Dodaj produkt</button>
            </Link>
        </div> 
    )
}

export default AddProductButton

