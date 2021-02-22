import React from 'react'

import '../../../../../assets/stylesheets/Admin2/Users/Users.scss'

import Header from './Header/Header'
import ClientsTable from './ClientsTable/ClientsTable'
import AddClientButton from './AddClientButton/AddClientButton'


const ShowClients = () => {
    return (
        <div className="clients-list-container">
            <div className="top-bar-container">
                <Header />
                <AddClientButton />
            </div>
            <ClientsTable />
        </div>
    )
}

export default ShowClients