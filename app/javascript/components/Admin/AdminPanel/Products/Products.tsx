import React from 'react'

import {Route, Switch} from 'react-router-dom'

import AddProduct from './AddProduct/AddProduct'
import ShowProduct from './ShowProduct/ShowProduct'
import EditProduct from './EditProduct/EditProduct'
import RemoveProduct from './RemoveProduct/RemoveProduct'

const Products = () => {
    return (
        <Switch>
            <Route path="/admin/Products/addProduct/">
                <AddProduct />
            </Route>

            <Route path="/admin/Products/editProduct/:productID">
                <EditProduct />
            </Route>

            <Route path="/admin/Products/removeProduct/:productID">
                <RemoveProduct />
            </Route>

            <Route path="/admin/Products">
                <ShowProduct />
            </Route>
        </Switch> 
    )
}

export default Products
