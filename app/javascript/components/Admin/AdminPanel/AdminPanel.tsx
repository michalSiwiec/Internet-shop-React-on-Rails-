import React from 'react'

import {Route, Switch, useRouteMatch} from 'react-router-dom'

import Clients from './Clients/Clients'
import Opinions from './Opinions/Opinions'
import Orders from './Orders/Orders'
import Statistics from './Statistics/Statistics'
import Products from './Products/Products'
import AdminDashboard from './Dashboard/Dashboard'

const AdminPanel = () => {
    const {path} = useRouteMatch()

    return(
        <Switch>
            <Route path={`${path}/`} exact>
                <AdminDashboard />
            </Route>

            <Route path={`${path}/Orders`}>
                <Orders />
            </Route>

            <Route path={`${path}/Statistics`}>
                <Statistics />
            </Route>

            <Route path={`${path}/Users`}>
                <Clients />
            </Route>

            <Route path={`${path}/Products`}>
                <Products />
            </Route>

            <Route path={`${path}/Opinions`}>
                <Opinions />
            </Route>
        </Switch>    
    )
}

export default AdminPanel