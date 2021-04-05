import React from 'react'

import {Link} from 'react-router-dom'

import Header from './Header/Header'
import AddProductButton from './AddProductButton/AddProductButton'
import Table from './Table/Table'

const ShowProduct = () => {
    return (
        <div className="product-list-container">
            <div className="back-container">
                <Link to="/admin">
                    <button>Cofinj</button>
                </Link>
            </div>

            <div className="top-bar-container">
                <Header />
                <AddProductButton />
            </div>
            
            <Table />
        </div>
    )
}

export default ShowProduct
