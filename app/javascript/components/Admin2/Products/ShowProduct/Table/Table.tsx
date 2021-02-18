import React, {useEffect} from 'react'

import {IProduct, IReduxState} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {useSelector, useDispatch} from 'react-redux'
import actions from '../../../../../../redux/products/duck/actions'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'

const Table = () => {
    const products = useSelector((state: IReduxState) => state.productsReducer.products)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('/api/v1/products',{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((products: Array<IProduct>) => dispatch(actions.setProduct(products, 'all')))
    }, [])

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <TableHeader columnName="Prezentacja produktu"/>
                        <TableHeader columnName="Nazwa produktu"/>
                        <TableHeader columnName="Cena"/>
                        <TableHeader columnName="Ilość na magazynie"/>
                        <TableHeader columnName="Typ produktu"/>
                        <TableHeader columnName="Akcje"/>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => <TableRow product={product} key={`products ${product.id}`}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table
