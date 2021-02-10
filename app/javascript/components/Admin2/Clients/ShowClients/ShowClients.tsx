import React from 'react'

import Header from './Header/Header'
import ClientsTable from './ClientsTable/ClientsTable'
import AddClientButton from './AddClientButton/AddClientButton'

const ShowClients = () => {
    return (
        <div className="clients-list-container">
            <div className="top-part">
                <Header />
                <AddClientButton />
            </div>
            <ClientsTable />
        </div>
    )
}

export default ShowClients
