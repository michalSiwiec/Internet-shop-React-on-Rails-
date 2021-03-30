import React, {useState, useEffect} from 'react'

import {IUser} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import TableHeader from './TableHeader/TableHeader'
import ClientsRow from './ClientsRow/ClientsRow'

interface IUsersData{userData: IUser, userID: number}

const ClientsTable = () => {
    const [usersData, setUsersData] = useState<Array<IUsersData>>([])

    useEffect(() => {
        fetch('/api/v1/user', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText)
        })
        .then((users: Array<IUsersData>) => setUsersData(users))
    }, [])
    
    console.log(usersData)

    return (
        <div className="clients-table-container">
            <table className="table">
                <thead>
                    <tr>
                        <TableHeader columnName="Imie" isInvisible={false} />
                        <TableHeader columnName="Nazwisko" isInvisible={false} />
                        <TableHeader columnName="E-mail" isInvisible={true} />
                        <TableHeader columnName="Numer tel." isInvisible={true} />
                        <TableHeader columnName="Akcje" isInvisible={false} />
                    </tr>
                </thead>

                <tbody>
                    {
                        usersData.map(userData => {
                            return(
                                <ClientsRow
                                    userID={userData.userID}
                                    dataLogins={{
                                        login: userData.userData.dataLogins.login,
                                        password: userData.userData.dataLogins.password
                                    }}
                                    personalData={{
                                        name: userData.userData.personalData.name,
                                        surname: userData.userData.personalData.surname,
                                        email: userData.userData.personalData.email,
                                        phone_number: userData.userData.personalData.phone_number
                                    }}
                                    key={`clientRow${userData.userData.dataLogins.login} ${Math.random()}`}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ClientsTable
