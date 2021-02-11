import React, {FC, useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import Order from './Order/Order'

interface Props {

}

const UserOrders:FC<Props> = () => {
    const {userID} = useParams()
    const [orders, setOrders]: any = useState([])

    useEffect(() => {
        fetch(`/api/v1/orders/get_user_orders?userID=${userID}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(orders_ => setOrders(orders_))
    }, [])

    // console.log(orders)
    console.log('user order')

    return (
        <div className="container">
            <div className="overlay"></div>

            <div className="user-order-container">
                {orders.map(order => <Order order={order} key={`order${order.dataCreated}`}/> )}
            </div>
        </div>
    )
}

export default UserOrders
