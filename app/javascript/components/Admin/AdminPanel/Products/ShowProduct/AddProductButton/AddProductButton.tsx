import React from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

const AddProductButton = () => {
    const {path} = useRouteMatch()
    
    return (
        <div className="add-product-button-container">
            <Link to={`${path}/addProduct`}>
                <button className="add-product-button-container__button">Dodaj produkt</button>
            </Link>
        </div> 
    )
}

export default AddProductButton

