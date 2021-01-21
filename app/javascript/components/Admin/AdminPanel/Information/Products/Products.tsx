import React, {FC, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import actions from '../../../../../../redux/products/duck/actions'

import {Route, Link} from 'react-router-dom'

import '../../../../../../assets/stylesheets/Products.scss'

interface Props{
    refElement: any
}

const Products:FC<Props> = ({refElement}) => {
    
    const dispatch = useDispatch()
    const products = useSelector((state:any) => state.productsReducer.products)

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


    const editProduct = (id:number) => {
        console.log(`edit ${id}`)
    }

    const removeProduct = (id:number) => {
        const decision = confirm("Czy chcesz usnąć ten produkt?");
        
        if(decision){
            console.log('I am rwemoving')
                fetch(`/api/v1/products/remove_product?productID=${id}`,{
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


    return (
        <>
            <Route path="/admin">
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
                                    <th>Słowoss luczowe</th>
                                    <th>Akwcje</th>
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
                                                    <Link to="/admin/editProduct"><div><button className="edit-button" onClick={() => editProduct(product.id)}>Edytuj</button></div></Link>
                                                    <div><button className="remove-button" onClick={() => removeProduct(product.id)}>Usuń</button></div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Route>

            <Route path="/admin/editProduct">
                <div className="background">
                    <div className="overlay">
                                           
                    </div>

                    <div className="edit-form-container">
                            <form>
                                <div className="input-container">
                                    <label>Zdjęcie
                                        <input type="file"/>
                                    </label>
                                </div>

                                <div className="input-container">
                                    <label>Opis produktu
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="input-container">
                                    <label>Cena
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="input-container">
                                    <label>Ilość na magazynie
                                        <input type="number"/>
                                    </label>
                                </div>

                                <div className="input-container">
                                    <label>Ty produktu
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="input-container">
                                    <label>Słowa kluczowe
                                        <input type="text"/>
                                    </label>
                                </div>

                                <div className="button-container">
                                    <Link to="/admin/"><button>Anuluj</button></Link>
                                    <button>Edytuj</button>
                                </div>
                            </form>
                        </div> 
                </div>                
            </Route>
        </>
    )
}

export default Products
