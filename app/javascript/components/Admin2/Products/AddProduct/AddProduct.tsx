import React, {useState} from 'react'

import Header from './Header/Header'
import Type from './Type/Type'
import ProductSource from './ProductSource/ProductSource'
import QuantityAvailable from './QuantityAvailable/QuantityAvailable'
import Price from './Price/Price'
import Description from './Description/Description'
import Buttons from './Buttons/Buttons'

import {checkDataForm} from '../../../../Helpers/Products/ProductsHelper'

const AddProduct = () => {
    const [source, setSource] = useState('')
    const [description, setDescription] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [price, setPrice] = useState(1)
    const [type, setType] = useState('meats')
    const [quantityAvailable, setQuantityAvailable] = useState(1)

    const addProduct = (e: any) => {
        const dataToCheck = [
            description.setted
        ]

        if(checkDataForm(dataToCheck)){
            const formData = {
                source,
                description: description.value,
                price,
                key_word: '',
                product_type: type,
                quantity_available: quantityAvailable
            }

            fetch("/api/v1/products/add_product", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    formData
                })
            })
        } else
            e.preventDefault()   
    }

    return (
        <div className="add-product-container">
            <div className="overlay"></div>

            <div className="add-user-form">
                <form>
                    <Header />
                    <ProductSource source={source} setSource={setSource} />
                    <Description description={description} setDescription={setDescription} />
                    <Price price={price} setPrice={setPrice} />
                    <Type type={type} setType={setType} />
                    <QuantityAvailable quantityAvailable={quantityAvailable} setQuantityAvailable={setQuantityAvailable} />
                    <Buttons addProduct={addProduct} />
                </form>
            </div>
        </div>
    )
}

export default AddProduct