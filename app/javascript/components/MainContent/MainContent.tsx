import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import ProductsMenu from './ProductsMenu/ProductsMenu'
import Advertisement from './Advertisement/Advertisement'
import OrderArea from './OrderArea/OrderArea'

import '../../../assets/stylesheets/mainContent.scss'


const MainContent = () => {
    return(
        <Switch>
            <Route path="/home/" exact>
                <Redirect to="/home/Offer/"/>
            </Route>

            <Route path="/home/Offer/">
                <div className="main-content-container">
                    <ProductsMenu />
                    <OrderArea />
                    <Advertisement />
                </div>
            </Route>

            <Route path="/home/Newspaper/">
                <p>Newspaper</p>
            </Route>

            <Route path="/home/Recipies/">
                <p>Recipies</p>
            </Route>

            <Route path="/home/ClientsApp/">
                <p>ClientsApp</p>
            </Route>

            <Route>Nie ma takiej podstrony!</Route>
        </Switch>            
    )
}

export default MainContent;