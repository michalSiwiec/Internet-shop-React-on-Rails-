import React, {useState} from 'react'

import Header from './Header/Header'
import Type from './Type/Type'
import ProductSource from './ProductSource/ProductSource'
import QuantityAvailable from './QuantityAvailable/QuantityAvailable'
import Price from './Price/Price'
import Description from './Description/Description'
import Buttons from './Buttons/Buttons'

import '../../../../../../../../assets/stylesheets/AdminPanel/Information/Products/AddProduct/AddProduct.scss'

const AddProduct = () => {
    const [source, setSource] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [quantityAvailable, setQuantityAvailable] = useState('')

    const addProduct = () => {
        const formData = {
            source,
            description,
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
