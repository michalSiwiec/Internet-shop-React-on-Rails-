import React, {FC} from 'react'

import {Route} from 'react-router-dom'

import UserOrders from './UserOrders/UserOrders'

import Header from './Header/Header'
import OrdersLogInUsers from './OrdersLogInUsers/OrdersLogInUsers'
import OrdersLogOutUsers from './OrdersLogOutUser/OrdersLogOutUsers'
import CommonOrders from './CommonOrders/CommonOrders'

import '../../../../../../../../assets/stylesheets/AdminPanel/Information/Orders/Lists/OrdersList.scss'

interface Props{
    informationPart: any
}

const OrdersList:FC<Props> = ({informationPart}) => {

    return (
        <div className="order-list-container" ref={informationPart.ordersList}>
            <Route path="/admin/" exact>
                <Header />
                <OrdersLogInUsers />
                <OrdersLogOutUsers />
            </Route>

            <Route path="/admin/orders/:userID" exact>
                <UserOrders />
            </Route>

            <Route path="/admin/commonOrders/:orderID">
                <CommonOrders />
            </Route>            
        </div>
    )
}

export default OrdersList
