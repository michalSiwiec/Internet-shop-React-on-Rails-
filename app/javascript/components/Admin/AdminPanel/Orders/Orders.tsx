import React from 'react'

import {Route, Switch, useRouteMatch} from 'react-router-dom'

import UserOrders from './UserOrders/UserOrders'

import Header from './Header/Header'
import OrdersLogInUsers from './OrdersLogInUsers/OrdersLogInUsers'
import OrdersLogOutUsers from './OrdersLogOutUser/OrdersLogOutUsers'
import CommonOrders from './CommonOrders/CommonOrders'

const OrdersList = () => {
    const {path} = useRouteMatch()

    return (
        <div className="order-list-container">
            <Switch>
                <Route path={path} exact> 
                    <Header />
                    <OrdersLogInUsers />
                    <OrdersLogOutUsers />
                </Route>

                <Route path={`${path}/userOrder/:userID`}>
                    <UserOrders />
                </Route>

                <Route path={`${path}/commonOrder/:id`}>
                    <CommonOrders />
                </Route>
            </Switch>     
        </div>
    )
}

export default OrdersList
