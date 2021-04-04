import React from 'react'

import {Route, Switch, useRouteMatch} from 'react-router-dom'

import AddProduct from './AddProduct/AddProduct'
import ShowProduct from './ShowProduct/ShowProduct'
import EditProduct from './EditProduct/EditProduct'
import RemoveProduct from './RemoveProduct/RemoveProduct'

const Products = () => {
    const {path} = useRouteMatch()

    return (
        <Switch>
            <Route path={path} exact>
                <ShowProduct />
            </Route>

            <Route path={`${path}/addProduct/`}>
                <AddProduct />
            </Route>

            <Route path={`${path}/editProduct/:productID`}>
                <EditProduct />
            </Route>

            <Route path={`${path}/removeProduct/:productID`}>
                <RemoveProduct />
            </Route>
        </Switch> 
    )
}

export default Products
