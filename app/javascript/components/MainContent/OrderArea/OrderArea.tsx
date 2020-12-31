import React, {FC, useState, useEffect} from 'react'

import '../../../../assets/stylesheets/OrderArea.scss'

import DownloadingData from './DownloadingData/DownloadingData'
import Products from './Products/Products'

interface IProducts{
    id: number
    source: string
    description: string
    price: number
    key_word: string
}

const OrderArea = ({}) => {
    const [products, setProducts] = useState<IProducts[]>([])

    useEffect(() => {
        // setTimeout(() => {
            fetch('/products')
            .then(response => response.json())
            .then(data => setProducts(data))
        // },3000)
    },[])

    return (
        <div className="order-area-container">
            {products.length ? <Products products={products}/> : <DownloadingData />}
        </div>
    )        
}

export default OrderArea