import React from 'react'

import {Route, Switch} from 'react-router-dom'

import UserOrders from './UserOrders/UserOrders'

import Header from './Header/Header'
import OrdersLogInUsers from './OrdersLogInUsers/OrdersLogInUsers'
import OrdersLogOutUsers from './OrdersLogOutUser/OrdersLogOutUsers'
import CommonOrders from './CommonOrders/CommonOrders'

const OrdersList = () => {

    return (
        <div className="order-list-container">
            <Switch>
                <Route path="/admin/Orders/userOrder/:userID">
                    <UserOrders />
                </Route>

                <Route path="/admin/Orders/commonOrder/:orderID">
                    <CommonOrders />
                </Route>

                <Route path="/admin/Orders"> 
                    <Header />
                    <OrdersLogInUsers />
                    <OrdersLogOutUsers />
                </Route>
            </Switch>     
        </div>
    )
}

export default OrdersList
