import React, {useState, useEffect} from 'react'

import TableHeader from './TableHeader/TableHeader'
import ClientsRow from './ClientsRow/ClientsRow'

const ClientsTable = () => {
    const [usersData, setUsersData]: Array<any> = useState([])

    useEffect(() => {
        fetch('/api/v1/users', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(users => setUsersData(users))
    }, [])

    return (
        <div className="clients-table-container">
            <table>
                <thead>
                    <tr>
                        <TableHeader columnName="Imie" />
                        <TableHeader columnName="Nazwisko" />
                        <TableHeader columnName="E-mail" />
                        <TableHeader columnName="Numer tel." />
                        <TableHeader columnName="Akcje" />
                    </tr>
                </thead>

                <tbody>
                    {usersData.map(data => <ClientsRow userData={data} key={`clientRow${data.data_login.login} ${Math.random()}`} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ClientsTable
