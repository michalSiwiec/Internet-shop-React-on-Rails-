import React from 'react'

import Products from './Products/Products'
import ProductsSummary from './ProductsSummary/ProductsSummary'

const WithProducts = () => {
    return (
        <>
            <Products />
            <ProductsSummary />
        </>
    )
}

export default WithProducts
