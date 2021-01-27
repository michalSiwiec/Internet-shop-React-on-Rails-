import React, {FC} from 'react'

import Header from './Header/Header'
import ClientsTable from './ClientsTable/ClientsTable'

interface Props {
    clientsList: any
}

const ShowClients:FC<Props> = ({clientsList}) => {
    console.log('Render showClients')
    return (
        <div className="clients-list-container" ref={clientsList}>
            <Header />
            <ClientsTable />
        </div>
    )
}

export default ShowClients
