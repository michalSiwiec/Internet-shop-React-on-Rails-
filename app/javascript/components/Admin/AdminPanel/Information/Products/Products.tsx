import React, {FC} from 'react'

import ProductsList from './ProductsList/ProductsList'
import ProductEditForm from './ProductEditForm/ProductEditForm'

import {Route} from 'react-router-dom'

import '../../../../../../assets/stylesheets/Products.scss'

interface Props{
    refElement: any
}

const Products:FC<Props> = ({refElement}) => {
    return (
        <>
            <Route path="/admin" exact>
                <ProductsList productListElement={refElement}/>
            </Route>

            <Route path="/admin/editProduct/:productID" exact>
                <ProductEditForm />
            </Route>
        </>
    )
}

export default Products
