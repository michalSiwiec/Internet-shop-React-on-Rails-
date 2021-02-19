import React, {useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import productsActions from '../../../../../../redux/products/duck/actions'

import {IReduxState, IProduct} from '../../../../../../TypeScript/Interfaces/Interfaces'

import DownloadingData from './DownloadingData/DownloadingData'
import Products from './Products/Products'
import WindowCommunicate from '../../../../Communicate/WindowCommunicate'

const OrderArea = () => {
    const {info} = useParams()

    const products: Array<IProduct> = useSelector((state: IReduxState) => state.productsReducer.products)
    const productsType = useSelector((state: IReduxState) => state.productsReducer.productType)
    const productsPartsVisibility = useSelector((state: IReduxState) => state.productsReducer.productsPartsVisibility)

    const dispatch = useDispatch()
    let selectedProducts = [...products]

    if(productsType !== 'all')
        selectedProducts = products.filter((product: IProduct) => product.product_type === productsType)

    useEffect(() => {
        setTimeout(() => {
            fetch('/api/v1/products',{method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then((products: Array<IProduct>) => dispatch(productsActions.setProduct(products, "meats")))
            .catch(err => console.error(err))
        },500)
    },[])

    return (
        <div className="order-area-container">
            {info === "orderCompletted" ? <WindowCommunicate info="Dodano zamówienie"/> : null}
            {products.length ? <Products products={selectedProducts} productsPartsVisibility={productsPartsVisibility}/> : <DownloadingData />}
        </div>
    )         
}

export default OrderArea