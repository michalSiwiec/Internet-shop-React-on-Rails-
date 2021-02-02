import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import AdminDashBoard from './Admin/AdminDashBoard/AdminDashBoard'
import MainMenu from './MainMenu/MainMenu';
import AdvertisementSlider from './AdvertisementSlider/AdvertisementSlider'
import MainContent from './MainContent/MainContent';
import MainFooter from './MainFooter/MainFooter';
import adminsReducer from '../../redux/admin/reducer';

// import store from '../../redux/store'


const App = () => {
    // console.log(store.getState())
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