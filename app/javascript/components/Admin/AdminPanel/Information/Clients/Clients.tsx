import React, {FC} from 'react'

import {Route} from 'react-router-dom'

import ShowClients from './ShowClients/ShowClients'
import RemoveClient from './RemoveClient/RemoveClient'
import EditClient from './EditClient/EditClient'
import AddClient from './AddClient/AddClient'

import '../../../../../../assets/stylesheets/UsersAdminPanel.scss'

interface Props{
    clientsList: any
}

const Clients:FC<Props> = ({clientsList}) => {
    console.log('Clients render')

    return (
        <>
            <Route path="/admin" exact>
                <ShowClients clientsList={clientsList} key={`${Math.random()}-clientList`} />
            </Route>

            <Route path="/admin/editUser/:userID" exact> 
                <EditClient />
            </Route>

            <Route path="/admin/removeUser/:userID" exact>
                <RemoveClient />
            </Route>

            <Route path="/admin/addUser" exact>
                <AddClient />
            </Route>
        </>
    )
}

export default Clients
