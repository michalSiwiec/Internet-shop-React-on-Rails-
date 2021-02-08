import React, {FC} from 'react'

import Header from './Header/Header'
import ClientsTable from './ClientsTable/ClientsTable'
import AddClientButton from './AddClientButton/AddClientButton'

// import '../../../../../../../../assets/stylesheets/AdminPanel/Information/Users/ShowUsers/ShowUsers.scss'

interface Props {
    clientsList: any
}

const ShowClients:FC<Props> = ({clientsList}) => {
    return (
        <div className="clients-list-container" ref={clientsList}>
            <div className="top-part">
                <Header />
                <AddClientButton />
            </div>
            <ClientsTable />
        </div>
    )
}

export default ShowClients
