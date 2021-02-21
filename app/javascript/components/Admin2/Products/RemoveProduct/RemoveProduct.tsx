import React, {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {IProduct} from '../../../../../TypeScript/Interfaces/Interfaces'

import '../../../../../assets/stylesheets/Admin2/Products/RemoveProduct/RemoveProduct.scss'

import Header from './Header/Header'
import Description from './Description/Description'
import ProductSource from './ProductSource/ProductSource'
import Buttons from './Buttons/Buttons'

const RemoveProduct = () => {
    const {productID} = useParams()
    const [source, setSource] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetch(`/api/v1/products/${productID}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((product: IProduct) => {
            setSource(product.source)
            setDescription(product.description)
        })
    }, [])

    
    return (
        <div className="remove-product-container">
            <div className="overlay"></div>

            <div className="remove-product-form">
                <form>
                    <Header />
                    <ProductSource source={source} />
                    <Description description={description} />
                    <Buttons productID={productID}/>
                </form>
            </div>
        </div>
    )
}

export default RemoveProduct
