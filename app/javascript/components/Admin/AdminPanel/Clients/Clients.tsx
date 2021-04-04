import React from 'react'

import {Route, Switch, useRouteMatch} from 'react-router-dom'

import ShowClients from './ShowClients/ShowClients'
import RemoveClient from './RemoveClient/RemoveClient'
import EditClient from './EditClient/EditClient'
import AddClient from './AddClient/AddClient'

const Clients = () => {
    const {path} = useRouteMatch()

    return (
        <Switch>
             <Route path={path} exact>
                <ShowClients key={`${Math.random()}-clientList`} />
            </Route>

            <Route path={`${path}/editUser/:id`}> 
                <EditClient />
            </Route>

            <Route path={`${path}/removeUser/:id`}>
                <RemoveClient />
            </Route>

            <Route path={`${path}/addUser`}>
                <AddClient />
            </Route>
        </Switch>
    )
}

export default Clients
