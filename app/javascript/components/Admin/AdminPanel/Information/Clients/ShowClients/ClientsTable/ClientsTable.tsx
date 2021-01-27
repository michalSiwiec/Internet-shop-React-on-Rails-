import React, {useState, useEffect} from 'react'

import TableHeader from './TableHeader/TableHeader'
import ClientsRow from './ClientsRow/ClientsRow'

const ClientsTable = () => {
    const [usersData, setUsersData]:any = useState([{
        user_delivery_addres: [{
            country: '',
            city: '',
            house_number: '',
            postal_code: ''
        }],
        data_login: [{
            login: ' ',
            password: ''
        }],
        personal_data: [{
            name: '',
            surname: '',
            email: '',
            phone_number: ''
        }]
    }])

    useEffect(() => {
        console.log('UseEffect in ClientTable')

        fetch('/api/v1/users/all_users', {method: 'GET'})
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
                    {usersData.map(data => <ClientsRow userData={data} key={`clientRow${data.data_login[0].login}`} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ClientsTable
