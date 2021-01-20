import React, {FC, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import actions from '../../../../../../redux/products/duck/actions'

import '../../../../../../assets/stylesheets/Products.scss'

interface Props{
    refElement: any
}

const Products:FC<Props> = ({refElement}) => {
    
    const dispatch = useDispatch()
    const products = useSelector((state:any) => state.productsReducer.products)

    console.log(products)

    useEffect(() => {
        fetch('/api/v1/products.json',{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((data) => dispatch(actions.setProduct(data, 'all')))
    }, [])


    return (
        <div className="product-list-container" ref={refElement}>
            
            <div className="header-container">
                <h2>Product list</h2>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Prezentacja produktu</th>
                            <th>Nazwa produktu</th>
                            <th>Cena</th>
                            <th>Ilość na magazynie</th>
                            <th>Typ produktu</th>
                            <th>Słowo kluczowe</th>
                        </tr>
                    </thead>

                <tbody>
                    {products.map(product => {
                            return(
                                <tr key={`product ${product.id}`}>
                                    <td><img src={`${product.source}`}/></td>
                                    <td><span>{product.description}</span></td>
                                    <td><span>{product.price}</span></td>
                                    <td><span>{product.quantity_available}</span></td>
                                    <td><span>{product.product_type}</span></td>
                                    <td><span>{product.key_word}</span></td>
                                    <td><button>Edytuj</button></td>
                                    <td><button>Usuń</button></td>
                                </tr>
                            )
                        })}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products
