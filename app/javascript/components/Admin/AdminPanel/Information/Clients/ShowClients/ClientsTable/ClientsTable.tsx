import React, {useState, useEffect} from 'react'

import TableHeader from './TableHeader/TableHeader'
import ClientsRow from './ClientsRow/ClientsRow'

const ClientsTable = () => {
    const [usersData, setUsersData]:any = useState([{
        user_delivery_addres: {
            country: '',
            city: '',
            house_number: '',
            postal_code: ''
        },
        data_login: {
            login: ' ',
            password: ''
        },
        personal_data: {
            name: '',
            surname: '',
            email: '',
            phone_number: ''
        }
    }])

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

                {/* 
                    When I have empty dataBase and I try add record I get error. I haven't got such mistake when my dataBase isn't hollow
                    Sometimes when I create record ones or more propeties from record is null - so I got an error. I think that it is associated with async. 
                */}

                <tbody>
                    {usersData.map(data => <ClientsRow userData={data} key={`clientRow${data.data_login.login}`} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ClientsTable
