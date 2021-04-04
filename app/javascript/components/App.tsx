import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Admin from './Admin/Admin'
import User from './User/User'

const App = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <User />
            </Route>

            <Route path="/admin">
                <Admin />
            </Route>

            <Route>
                <p>Naaie ma takiej podstrony 404</p>
            </Route>
        </Switch>
    )
}

export default App;