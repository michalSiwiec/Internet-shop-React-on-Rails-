import React, {useState, useEffect} from 'react'

import {useSelector} from 'react-redux'

import Product from './Product/Product'
import Header from './Header/Header'

const Products = () => {
    const [productsInBasketFullVersion, setProductsInBasketFullVersion] = useState([])
    const productsInBasket = useSelector((state:any) => state.basketReducer.products)

    useEffect(() => {
        // I send to backend array of object because I need to get array of object with quantity but also product's property
        const URL = `/api/v1/products/show_selected?products=${JSON.stringify(productsInBasket)}`
        const OPTIONS = {method: 'GET'}

        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(products => setProductsInBasketFullVersion(products))
    }, [productsInBasket])

    return (
        <div className="product-part-with-products">
            <Header />
            {productsInBasketFullVersion.map((productFullVersion:any) => <Product product={productFullVersion.product} quantity={productFullVersion.quantity} key={`product-container${productFullVersion.product.id}`} />)}
        </div>
    )
}

export default Products
