import React, {FC, useState, useRef} from 'react'

import actions from '../../../../../../redux/basket/duck/actions'
import {useDispatch} from 'react-redux'

interface Props {
    product: {
        id: number
        source: string
        description: string
        price: number
        key_word: string
    }
}

const Product:FC<Props> = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const quantityInput:any = useRef(null)
    const dispatch = useDispatch()
    
    const updateQuantity = (e:string) => {
        setQuantity(parseInt(e))
    }

    const addProductToBasket = () => {
        const productID = product.id
        const quantity = parseInt(quantityInput.current.value)

        fetchProduct(productID)
    }

    const fetchProduct = (productID:number) => {
        const URL = `/api/v1/products/show?productID=${productID}`
        const OPTIONS = {method: 'GET'}
        
        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(product => {
            const price = product.price
            dispatch(actions.addProductToBasket(productID, quantity, price))
        })
    }

    return (
        <div className="single-product-container">
            <div className="flex-container">
                <figure>
                    <img src={product.source} alt={`picture${product.id}`} className="product-picture"/>
                    <figcaption className="product-description">{product.description}</figcaption>
                </figure>
            </div>
            
            <div className="flex-container">
                <button className="add-to-basket-button" onClick={addProductToBasket}>Do koszyka</button>
                <input ref={quantityInput} type="number" className="select_quantity_product" onChange={(e) => updateQuantity(e.target.value)} placeholder="Ilossść" min="1" value={quantity}/>
            </div>
        </div>
    )
}

export default Product
