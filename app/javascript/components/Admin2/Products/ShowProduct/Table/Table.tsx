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
            <table className="table">
                <thead>
                    <tr>
                        <TableHeader columnName="Prezentacja produktu" isVisibleInSmallerSize={true} />
                        <TableHeader columnName="Nazwa produktu" isVisibleInSmallerSize={false} />
                        <TableHeader columnName="Cena" isVisibleInSmallerSize={false} />
                        <TableHeader columnName="Ilość na magazynie" isVisibleInSmallerSize={false} />
                        <TableHeader columnName="Typ produktu" isVisibleInSmallerSize={false} />
                        <TableHeader columnName="Akcje" isVisibleInSmallerSize={true} />
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
