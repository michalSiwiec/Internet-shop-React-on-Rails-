import React from 'react'

import {Route, Switch} from 'react-router-dom'

import ShowClients from './ShowClients/ShowClients'
import RemoveClient from './RemoveClient/RemoveClient'
import EditClient from './EditClient/EditClient'
import AddClient from './AddClient/AddClient'

const Clients = () => {
    return (
        <Switch>
            <Route path="/admin/Users/editUser/:id"> 
                <EditClient />
            </Route>

            <Route path="/admin/Users/removeUser/:id">
                <RemoveClient />
            </Route>

            <Route path="/admin/Users/addUser">
                <AddClient />
            </Route>

            <Route path="/admin/Users">
                <ShowClients key={`${Math.random()}-clientList`} />
            </Route>
        </Switch>
    )
}

export default Clients
