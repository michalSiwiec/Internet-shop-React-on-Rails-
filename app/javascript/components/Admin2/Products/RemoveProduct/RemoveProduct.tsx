import React, {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import Header from './Header/Header'
import Description from './Description/Description'
import ProductSource from './ProductSource/ProductSource'
import Buttons from './Buttons/Buttons'

// import '../../../../../../../../assets/stylesheets/AdminPanel/Information/Products/RemoveProduct/RemoveProduct.scss'

const RemoveProduct = () => {
    const {productID} = useParams()
    const [source, setSource] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        fetch(`/api/v1/products/show?productID=${productID}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(product => {
            setSource(product.source)
            setDescription(product.description)
        })
    }, [])

    return (
        <div className="remove-product-container">
            <div className="overlay"></div>

            <div className="remove-user-form-container">
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
