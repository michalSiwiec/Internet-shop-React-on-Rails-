import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import OrderAreaa from './OrderAreaa/OrderAreaa'
import AboutUs from './AboutUs/AboutUs'
import OrderForm from './OrderForm/OrderForm'
import ShoppingOption from './ShoppingOption/ShoppingOption'
import BasketSummary from './BasketSummary/BasketSummary'
import RejestrationForm from './RejestrationForm/RejestrationForm'

const MainContent = () => {
    return(
        <Switch>
            <Route path="/home/" exact>
                <Redirect to="/home/Offer/"/>
            </Route>

            <Route path="/home/Offer/:info?">
                <OrderAreaa />
            </Route>

            <Route path="/home/AboutUs/">
                <AboutUs />
            </Route>

            <Route path="/home/Recipies/">
                <p>Recipies</p>
            </Route>

            <Route path="/home/ClientsApp/">
                <p>ClientsApp</p>
            </Route>

            <Route path="/home/BasketSummary">
                <BasketSummary />
            </Route>

            <Route path="/home/ShoppingOption">
                <ShoppingOption />
            </Route>

            <Route path='/home/OrderForm'>
                <OrderForm />
            </Route>

            <Route path="/home/rejestrationForm"> 
                <RejestrationForm />
            </Route>

            <Route>Nie ma takiej podstrony!</Route>
        </Switch>            
    )
}

export default MainContent;