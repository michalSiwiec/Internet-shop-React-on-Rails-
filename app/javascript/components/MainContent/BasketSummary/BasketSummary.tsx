import React, {useState, useEffect} from 'react'

import {useSelector} from 'react-redux'

const BasketSummary = () => {
    const productsInBasket = useSelector((state:any) => state.basketReducer.products)
    const wholePrice = useSelector((state:any) => state.basketReducer.wholePrice)
    const [productsFullVersion, setProductsFullVersion] = useState([])

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
        // .then(products => console.log(products))
    },[])

    return (
        <div className="basket-summary-container">
            {productsInBasket.length == 0 ? <h2>Brak produqqktóqw w koszyku</h2> : <h2>Produwwwsssdkwsqqwty w koszywwku</h2>}

            {productsFullVersion.map((product:any) => {

                return (
                    <div className="product-flex-container" key={`product-container${product.id}`}>
                        <div className="picture-container">
                          <figure>
                              <img src={product.source} alt=""/>
                              <figcaption className="picture-container__remove-product">Usuń</figcaption>
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
                                <input type="number" min="1" defaultValue={product.quantity}/>
                            </div>

                            <div className="summary-price-container">
                                <div>
                                    <p>Razem: <span className="summary-price-container__price">{`${wholePrice}zł`}</span></p>
                                </div>

                                <div className="summary-price-container__ornament"></div>
                            </div>
                    
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BasketSummary
