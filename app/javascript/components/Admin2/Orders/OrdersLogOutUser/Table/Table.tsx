import React, {useState, useEffect} from 'react'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'

const Table = () => {
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
        <table>
            <thead>
                <tr>
                    <TableHeader className="th-name" value="Imię" />
                    <TableHeader className="th-surname" value="Nazwisko" />
                    <TableHeader className="th-show-orders" value="Przegląd" />
                </tr>
            </thead>
            
            <tbody>
                {orders.map((order: any) => <TableRow order={order} key={`order${order.orderID}`} />)}
            </tbody>
        </table>
    )
}

export default Table
