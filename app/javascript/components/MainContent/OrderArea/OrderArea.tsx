import React, {FC, useState, useEffect} from 'react'

import '../../../../assets/stylesheets/OrderArea.scss'

import DownloadingData from './DownloadingData/DownloadingData'
import Products from './Products/Products'

// interface IProducts{
//     id: number
//     source: string
//     description: string
//     price: number
//     key_word: string
// }

interface Props{
    products: IProducts[]
    selectedType: string
}

interface IProducts{
    id: number
    source: string
    description: string
    price: number
    key_word: string
    product_type: string
}


const OrderArea:FC<Props> = ({products, selectedType}) => {
    
    let selectedProducts;

    if(selectedType !== "all")
         selectedProducts = products.filter(product => product.product_type == selectedType)
    else 
        selectedProducts = [...products]
    
    return (
        <div className="order-area-container">
            {products.length ? <Products products={selectedProducts} selectedType={selectedType}/> : <DownloadingData />}
        </div>
    )        
}

export default OrderArea