import React, {FC, useState, useRef} from 'react'

import WindowCommunicate from '../../../../../../Communicate/WindowCommunicate'

import actions from '../../../../../../../../redux/basket/duck/actions'
import {useDispatch, useSelector} from 'react-redux'

interface Props {
    product: {
        id: number
        source: string
        description: string
        price: number
        key_word: string,
        product_type: string,
        quantity_available: number
    }
}

const Product:FC<Props> = ({product}) => {
    // quantity enterd to input
    const [quantity, setQuantity] = useState(1)
    // variables inform us if i should show a window after adding new product
    const [productAdded, setProductAdded] = useState(false)
    // input holding quantity product
    const quantityInput:any = useRef(null)
    const dispatch = useDispatch()
    // product added to basket
    let productIntoBasket = useSelector((state: any) => state.basketReducer.products.find(product => product.id === product.id))
    // quantity product added to basket
    let productQuantityIntoBasket;

    // if basket doesn't include product his quantity is equal 0 otherwise I download this value - I need it to
    // make limited quantity posible product 
    if(!productIntoBasket)
        productQuantityIntoBasket = 0
    else
        productQuantityIntoBasket = productIntoBasket.quantity

    const addProductToBasket = () => {
        if(product.quantity_available - productQuantityIntoBasket > 0){
            const productID = product.id
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
            .then(() => {
                setQuantity(1)
                setProductAdded(true)
            })
        } else
            alert('Brak produktu na magazynie - produkt nie dostępny :C')
    }

    return (
        <div className={`single-product-container`}>
            {productAdded 
                ? <WindowCommunicate info="Produkt dodano do koszyka!" setTransmittedState={setProductAdded} />
                : null
            }

            <div className="flex-container">
                <figure>
                    <img src={product.source} alt={`picture${product.id}`} className="product-picture"/>
                    <figcaption className="product-description">{product.description}</figcaption>
                </figure>
            </div>
            
            <div className="flex-container">
                <button className="add-to-basket-button" onClick={() => addProductToBasket()}>Du koszyka</button>
                <input ref={quantityInput}
                    type="number"
                    className="select_quantity_product"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min={1}
                    value={quantity}
                    max={product.quantity_available - productQuantityIntoBasket}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                />
            </div>
        </div>
    )
}

export default Product
