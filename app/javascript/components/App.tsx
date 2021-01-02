import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import MainMenu from './MainMenu/MainMenu';
import AdvertisementSlider from './AdvertisementSlider/AdvertisementSlider'
import MainContent from './MainContent/MainContent';
import MainFooter from './MainFooter/MainFooter';


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

                <Route path="/admin/" exact>
                    <p>Admin panael</p>
                </Route>

                <Route>
                    <p>Naaie ma takqaaiej podaaaaqstrony</p>
                </Route>
            </Switch>
        </div>
    )
}

export default App;