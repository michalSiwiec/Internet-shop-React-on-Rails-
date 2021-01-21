import React, {FC} from 'react'

import Header from './Header/Header'
import Table from './Table/Table'

interface Props {
    productListElement: any
}

const ProductsList:FC<Props> = ({productListElement}) => {
    return (
        <div className="product-list-container" ref={productListElement}>
            <Header />
            <Table />
        </div>
    )
}

export default ProductsList
