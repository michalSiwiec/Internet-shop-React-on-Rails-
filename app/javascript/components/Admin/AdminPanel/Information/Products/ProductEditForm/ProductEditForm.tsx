import React, {useEffect, useState} from 'react'

import ProductType from './ProductType/ProductType'
import ProductQuantityAvailable from './ProductQuantityAvailable/ProductQuantityAvailable'
import ProductPrice from './ProductPrice/ProductPrice'
import ProductPicture from './ProductPicture/ProductPicture'
import ProductKeyWord from './ProductKeyWord/ProductKeyWord'
import ProductDescription from './ProductDescription/ProductDescription'
import OptionsButton from './OptionsButton/OptionsButton'

import actions from '../../../../../../../redux/products/duck/actions'
import {useDispatch}  from 'react-redux'

import {useParams} from 'react-router-dom'

const ProductEditForm = () => {
    const {productID} = useParams()
    const dispatch = useDispatch()
    const [source, setSource] = useState({
        value: '',
        setted: true
    })
    const [description, setDescription] = useState({
        value: '',
        setted: true
    })
    const [price, setPrice] = useState({
        value: '',
        setted: true
    })
    const [quantityAvailable, setQuantityAvailable]= useState({
        value: '',
        setted: true
    })
    const [type, setType] = useState({
        value: '',
        setted: true
    })
    const [keyWord, setKeyWord] = useState({
        value: '',
        setted: true
    })

    const editProduct = () => {
        const formData = {
            source: source.value,
            description: description.value,
            price: price.value,
            quantity_available: quantityAvailable.value,
            product_type: type.value,
            key_word: keyWord.value,
        }

        fetch(`/api/v1/products/edit_product`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formData: formData,
                productID: productID
            })
        })
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(products => dispatch(actions.setProduct(products, 'all')))
    }

    useEffect(() => {
        fetch(`/api/v1/products/show?productID=${productID}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(product => {
            setSource({value: product.source, setted: true})
            setDescription({value: product.description, setted: true})
            setPrice({value: product.price, setted: true})
            setQuantityAvailable({value: product.quantity_available, setted: true})
            setType({value: product.product_type, setted: true})
            setKeyWord({value: product.key_word, setted: true})
        })
    },[])

    return (
        <div className="background">
            <div className="overlay">
                                    
            </div>

            <div className="edit-form-container">
                <form>
                    <ProductPicture setSource={setSource} source={source}/>
                    <ProductDescription description={description} setDescription={setDescription} />
                    <ProductPrice price={price} setPrice={setPrice} />
                    <ProductQuantityAvailable quantityAvailable={quantityAvailable} setQuantityAvailable={setQuantityAvailable}/>
                    <ProductType type={type} setType={setType}/>
                    <ProductKeyWord keyWord={keyWord} setKeyWord={setKeyWord} />
                    <OptionsButton editProduct={editProduct} />
                </form>
            </div> 
        </div> 
    )
}

export default ProductEditForm
