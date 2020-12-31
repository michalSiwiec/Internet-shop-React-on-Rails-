import React from 'react'

import ProductsMenu from './ProductsMenu/ProductsMenu'
import Advertisement from './Advertisement/Advertisement'
import OrderArea from './OrderArea/OrderArea'

import '../../../assets/stylesheets/mainContent.scss'

const MainContent = () => {
    return(
        <div className="main-content-container">
            <ProductsMenu />
            <OrderArea />
            <Advertisement />
        </div>
    )
}

export default MainContent;