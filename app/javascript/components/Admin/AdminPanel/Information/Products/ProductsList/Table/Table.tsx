import React, {useEffect} from 'react'

import {Link} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import actions from '../../../../../../../../redux/products/duck/actions'


const Table = () => {

    const products = useSelector((state:any) => state.productsReducer.products)
    const dispatch = useDispatch()

    const removeProduct = (id:number) => {
        const decision = confirm("Czy chcesz usnąć ten produkt?");
        
        if(decision){
            console.log('I am rwemoving')
                // fetch(`/api/v1/products/remove_product?productID=${id}`,{
                fetch(`/api/v1/products/remove_product`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productID: id
                    })
                })
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then((data) => dispatch(actions.setProduct(data, 'all')))
        }
    }

    // I am setting state into Redux - I do it here because I set products in Redux's state when user visit OrderArea. 
    // Maby I should do it when app is starting
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
        <div className="header-container">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Prezentacja produktu</th>
                            <th>Nazwa produktu</th>
                            <th>Cena</th>
                            <th>Ilość na magazynie</th>
                            <th>Typ produktu</th>
                            <th>Słowoss luczowe</th>
                            <th>Akcje</th>
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
                                        <td>
                                            <Link to={`/admin/editProduct/${product.id}`}><div><button className="edit-button">Edytuj</button></div></Link>
                                            <div><button className="remove-button" onClick={() => removeProduct(product.id)}>Usuń</button></div>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
