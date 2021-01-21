import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import actions from '../../../../../../../../redux/products/duck/actions'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'


const Table = () => {

    const products = useSelector((state:any) => state.productsReducer.products)
    const dispatch = useDispatch()

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
                            <TableHeader columnName="Prezentacja produktu"/>
                            <TableHeader columnName="Nazwa produktu"/>
                            <TableHeader columnName="Cena"/>
                            <TableHeader columnName="Ilość na magazynie"/>
                            <TableHeader columnName="Typ produktu"/>
                            <TableHeader columnName="Słowa kluczowe"/>
                            <TableHeader columnName="Akcje"/>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(product => <TableRow product={product} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
