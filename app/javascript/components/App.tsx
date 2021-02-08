import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import AdminDashBoard from './Admin/AdminDashBoard/AdminDashBoard'
import MainMenu from './User/MainMenu/MainMenu';
import AdvertisementSlider from './User/AdvertisementSlider/AdvertisementSlider'
import MainContent from './User/MainContent/MainContent';
import MainFooter from './User/MainFooter/MainFooter';

const App = () => {
    return(
        <div> 
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home/"/>
                </Route>

                <Route path="/home/">
                    <MainMenu />
                    <AdvertisementSlider />
                    <MainContent />
                    <MainFooter/>
                </Route>

                <Route path="/admin/">
                    <AdminDashBoard />
                </Route>

                <Route>
                    <p>Naaie ma takiej podstrony 404</p>
                </Route>
            </Switch>
        </div>
    )
}

export default App;