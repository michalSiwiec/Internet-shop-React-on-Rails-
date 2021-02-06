import React, {FC, useState, useEffect} from 'react'

import Header from './Header/Header'

interface Props {

}

const OrdersLogOutUsers:FC<Props> = () =>  {
    const [orders, setOrders]: any = useState([])

    useEffect(() => {
        fetch('/api/v1/orders/get_log_out_users_orders', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.text()
            else
                throw Error(response.statusText);
        })
        // .then(orders_ => setOrders(orders_))
        .then(data => console.log(data))
    }, [])

    console.log(orders)

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

                </tbody>
            </table>
        </div>
    )
}

export default OrdersLogOutUsers
