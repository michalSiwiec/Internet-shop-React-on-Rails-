import React, {FC, useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import Header from './Header/Header'

interface Props {

}

const OrdersLogInUsers:FC<Props> = () =>  {
    const [usersWithOrders, setUsersWithOrders]: any = useState([])

    useEffect(() => {
        fetch('/api/v1/users/get_log_in_users_with_orders', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(usersWithOrders_ => setUsersWithOrders(usersWithOrders_))
    }, [])

    // console.log(usersWithOrders)

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
                    {usersWithOrders.map((userWithOrder: any) => {
                        return(
                            <tr key={`tr-user${userWithOrder.userID}`}>
                                <td>{userWithOrder.dataPerson.name}</td>
                                <td>{userWithOrder.dataPerson.surname}</td>
                                <td>
                                    <Link to={`/admin/orders/${userWithOrder.userID}`}>
                                        <button>Zobacz</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersLogInUsers
