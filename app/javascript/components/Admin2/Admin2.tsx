import React from 'react'

import {Route, Switch} from 'react-router-dom'

import AdminDashboard from './AdminDashboard/AdminDashboard'
import Clients from './Clients/Clients'
import Opinions from './Opinions/Opinions'
import Orders from './Orders/Orders'
import Statistics from './Statistics/Statistics'
import Products from './Products/Products'

const Admin2 = () => {
    console.log("Dashboard")

    return (
        <Switch>
            <Route path="/admin/Orders">
                <Orders />
            </Route>

            <Route path="/admin/Statistics">
                <Statistics />
            </Route>

            <Route path="/admin/Users">
                <Clients />
            </Route>

            <Route path="/admin/Products">
                <Products />
            </Route>

            <Route path="/admin/Opinions">
                <Opinions />
            </Route>

            <Route path="/admin">
                <AdminDashboard />
            </Route>
        </Switch>       
    )
}

export default Admin2
