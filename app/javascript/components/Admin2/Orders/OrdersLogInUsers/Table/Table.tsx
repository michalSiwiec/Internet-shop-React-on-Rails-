import React, {useEffect, useState} from 'react'

import {IPersonalData} from '../../../../../../TypeScript/Interfaces/Interfaces'

import TableHeader from './TableHeader/TableHeader'
import TableRow from './TableRow/TableRow'

interface IUsersWithOrders{
    dataPerson: IPersonalData,
    userID: number
}

const Table = () => {
    const [usersWithOrders, setUsersWithOrders] = useState<Array<IUsersWithOrders>>([])

    useEffect(() => {
        fetch('/api/v1/user/get_log_in_users_with_orders', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((usersWithOrders_: Array<IUsersWithOrders>) => setUsersWithOrders(usersWithOrders_))
    }, [])

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
                {usersWithOrders.map((userWithOrder: IUsersWithOrders) => {
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
