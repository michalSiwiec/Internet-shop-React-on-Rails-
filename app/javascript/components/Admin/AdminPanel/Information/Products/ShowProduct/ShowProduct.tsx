import React, {FC} from 'react'

import Header from '../ShowProduct/Header/Header'
import AddProductButton from './AddProductButton/AddProductButton'
import Table from '../ShowProduct/Table/Table'

interface Props {
    productListElement: any
}

const ShowProduct:FC<Props> = ({productListElement}) => {
    return (
        <div className="product-list-container" ref={productListElement}>
            <Header />
            <AddProductButton />
            <Table />
        </div>
    )
}

export default ShowProduct
