import React, {FC, useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import Header from './Header/Header'

interface Props {

}

const OrdersLogOutUsers:FC<Props> = () =>  {
    const [orders, setOrders]: any = useState([])

    useEffect(() => {
        fetch('/api/v1/orders/get_log_out_users_orders', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(orders_ => setOrders(orders_))
    }, [])

    return (
        <div className="order-part-container">
            <Header />

            <table>
                <thead>
                    <tr>
                        <th className="th-name">Imię</th>
                        <th className="th-surname">Nazwisko</th>
                        <th className="th-show-orders">Przegląd</th>
                    </tr>
                </thead>
                
                <tbody>
                    {orders.map((order: any) => {
                        return(
                            <tr key={`order${order.orderID}`}>
                                <td>{order.dataPerson.name}</td>
                                <td>{order.dataPerson.surname}</td>
                                <td><Link to={`/admin/commonOrders/${order.orderID}`}>{<button>Zobacz zamówienie</button>}</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersLogOutUsers
