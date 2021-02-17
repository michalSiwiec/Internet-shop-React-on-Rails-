import React, {useEffect, useState} from 'react'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'

const Table = () => {
    const [usersWithOrders, setUsersWithOrders]: any = useState([])

    useEffect(() => {
        fetch('/api/v1/user/get_log_in_users_with_orders', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(usersWithOrders_ => setUsersWithOrders(usersWithOrders_))
    }, [])

    console.log(usersWithOrders)

    return (
        <table>
            <thead>
                <tr>
                    <TableHeader value="Imię" className="th-name" />
                    <TableHeader value="Nazwisko" className="th-surname" />
                    <TableHeader value="Przegląd" className="th-show-orders" />
                </tr>
            </thead>

            <tbody>
                {usersWithOrders.map((userWithOrder: any) => {
                    return(
                        <tr key={`tr-user${userWithOrder.userID}`}>
                            <TableRow value={userWithOrder.dataPerson.name} />
                            <TableRow value={userWithOrder.dataPerson.surname} />
                            <TableRow type="button" userID={userWithOrder.userID} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
