import React from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../assets/stylesheets/Admin/Users/Users.scss'

import Header from './Header/Header'
import ClientsTable from './ClientsTable/ClientsTable'
import AddClientButton from './AddClientButton/AddClientButton'

const ShowClients = () => {
    return (
        <div className="clients-list-container">
            <div className="back-container">
                <Link to="/admin">
                    <button>Cofnij</button>
                </Link>
            </div>

            <div className="top-bar-container">
                <Header />
                <AddClientButton />
            </div>
            <ClientsTable />
        </div>
    )
}

export default ShowClients