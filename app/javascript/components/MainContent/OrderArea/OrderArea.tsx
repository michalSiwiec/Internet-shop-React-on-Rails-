import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import productsActions from '../../../../redux/products/duck/actions'

import '../../../../assets/stylesheets/OrderArea.scss'

import DownloadingData from './DownloadingData/DownloadingData'
import Products from './Products/Products'

const OrderArea = () => {

    const products = useSelector((state:any) => state.productsReducer.products)
    const productsType = useSelector((state:any) => state.productsReducer.productType)
    const productsPartsVisibility = useSelector((state:any) => state.productsReducer.productsPartsVisibility)
    const dispatch = useDispatch()
    let selectedProducts = [...products]

    if(productsType !== 'all')
        selectedProducts = products.filter(product => product.product_type === productsType)

    useEffect(() => {
        setTimeout(() => {
            fetch('/api/v1/products.json',{method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then(data => dispatch(productsActions.setProduct(data, "meats")))
            .catch(err => console.error(err))
        },500)
    },[])

    return (
        <div className="order-area-container">
            {products.length ? <Products products={selectedProducts} productsPartsVisibility={productsPartsVisibility}/> : <DownloadingData />}
        </div>
    )         
}

export default OrderArea