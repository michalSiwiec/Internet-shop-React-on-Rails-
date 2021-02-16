import React, {FC, useState, useEffect} from 'react'

import {useSelector} from 'react-redux'

import Product from './Product/Product'
import Header from './Header/Header'

interface Props {
}

const Products:FC<Props> = () => {
    const [productsFullVersion, setProductsFullVersion] = useState([])
    const productsInBasket = useSelector((state:any) => state.basketReducer.products)

    useEffect(() => {
        const URL = `/api/v1/products/show_selected?products=${JSON.stringify(productsInBasket)}`
        const OPTIONS = {method: 'GET'}

        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(products => setProductsFullVersion(products))
    }, [productsInBasket])

    return (
        <div className="product-part-with-products">
            <Header />
            {productsFullVersion.map((product:any) => <Product product={product} key={`product-container${product.id}`} />)}
        </div>
    )
}

export default Products
