import React, {FC} from 'react'

import Header from './Header/Header'
import AddProductButton from './AddProductButton/AddProductButton'
import Table from './Table/Table'

// import '../../../../../../../../assets/stylesheets/AdminPanel/Information/Products/ShowProducts/ShowProducts.scss'

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
