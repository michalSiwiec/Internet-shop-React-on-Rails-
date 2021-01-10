import React, {useState, useEffect} from 'react'

import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

import actions from '../../../../redux/basket/duck/actions'


const BasketSummary = () => {
    const productsInBasket = useSelector((state:any) => state.basketReducer.products)
    const wholePrice = useSelector((state:any) => state.basketReducer.wholePrice)
    const [productsFullVersion, setProductsFullVersion] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const URL = `/api/v1/products/show_selected?products=${JSON.stringify(productsInBasket)}`
        const OPTIONS = {method: 'GET'}

        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(products => setProductsFullVersion(products))
    }, [productsInBasket])

    const removeProductFromBasket = (id:number, quantity:number) => {
        const URL = `/api/v1/products/show?productID=${id}`
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
            dispatch(actions.removeProductFromBasket(id, quantity, price))
        })
    }

    const updateQuantityProduct = (id:number, quantity:string) => {
        const URL = `/api/v1/products/show?productID=${id}`
        const OPTIONS = {method: 'GET'}
        
        // debugger

        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(product => {
            const price = product.price
            const presentProductQuantity = productsInBasket.find(product => product.id === id).quantity
            const quantityAddedOrSubstractedProduct = parseInt(quantity) - presentProductQuantity

            dispatch(actions.changeProductQuantity(id, quantityAddedOrSubstractedProduct, price))
        })
    }

    return (
        <div className="basket-summary-container">
            {
                productsInBasket.length == 0 ? (
                    <div className="product-part-without-products">
                        <h2>Brak produktów w koszyku</h2>
                    </div>
                ) : (
                    <>
                        <div className="product-part-with-products">
                            <h2>Produkty w koszyku</h2>
                            {
                                productsFullVersion.map((product:any) => {

                                    return (
                                        <div className="product-flex-container" key={`product-container${product.id}`}>
                                            <div className="picture-container">
                                            <figure>
                                                <img src={product.source} alt="" className="picture-container__picture"/>
                                                <figcaption className="picture-container__remove-product" onClick={() => removeProductFromBasket(product.id, product.quantity)}>Usuń</figcaption>
                                            </figure>
                                            </div>
                    
                                            <div className="description-container">
                                                <div>
                                                    <h3>Opis produktu</h3>
                                                </div>
                    
                                                <div>
                                                    <span>{product.description}</span>
                                                </div>
                                            </div>
                    
                                            <div className="change-quantity-container">
                                                <div>
                                                    <h3>Ilość</h3>
                                                </div>
                    
                                                <div>
                                                    <input type="number" min="1" defaultValue={product.quantity} onChange={(e) => updateQuantityProduct(product.id, e.target.value)}/>
                                                </div>
                    
                                                <div className="summary-price-container">
                                                    <div>
                                                        <p>Razem: <span className="summary-price-container__price">{`${product.quantity * product.price}zł`}</span></p>
                                                    </div>
                    
                                                    <div className="summary-price-container__ornament"></div>
                                                </div>
                                        
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="summary-part">
                            <div className="subcontainer">
                                <p>Do zapłaty<span className="subcontainer__price">{wholePrice}</span>zł</p>
                                <p>+ transport <span className="subcontainer__price-of-transport">15</span> zł</p>
                            </div>

                            <div className="subcontainer">
                                <input type="button" value="Przejdź dalej" className="subcontainer__continue-shopping-btn" />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default BasketSummary
