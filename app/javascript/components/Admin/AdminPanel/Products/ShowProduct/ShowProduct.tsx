import React from 'react'

import Header from './Header/Header'
import AddProductButton from './AddProductButton/AddProductButton'
import Table from './Table/Table'

const ShowProduct = () => {
    return (
        <div className="product-list-container">
            <div className="top-bar-container">
                <Header />
                <AddProductButton />
            </div>
            
            <Table />
        </div>
    )
}

export default ShowProduct
