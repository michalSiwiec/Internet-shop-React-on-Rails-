import React, {FC} from 'react'

import AddProduct from './AddProduct/AddProduct'
import ShowProduct from './ShowProduct/ShowProduct'
import EditProduct from './EditProduct/EditProduct'
import RemoveProduct from './RemoveProduct/RemoveProduct'

import {Route} from 'react-router-dom'

interface Props{
    refElement: any
}

const Products:FC<Props> = ({refElement}) => {
    return (
        <>
            <Route path="/admin" exact>
                <ShowProduct productListElement={refElement} />
            </Route>

            <Route path="/admin/addProduct/" exact>
                <AddProduct />
            </Route>

            <Route path="/admin/editProduct/:productID" exact>
                <EditProduct />
            </Route>

            <Route path="/admin/removeProduct/:productID" exact>
                <RemoveProduct />
            </Route>
        </>
    )
}

export default Products
