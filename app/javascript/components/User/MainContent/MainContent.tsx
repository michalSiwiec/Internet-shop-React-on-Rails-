import React from 'react'

import {Route, Switch} from 'react-router-dom'

import OrderAreaa from './OrderAreaa/OrderAreaa'
import ShopOpinions from './ShopOpinions/ShopOpinions'
import OrderForm from './OrderForm/OrderForm'
import ShoppingOption from './ShoppingOption/ShoppingOption'
import BasketSummary from './BasketSummary/BasketSummary'
import RejestrationForm from './RejestrationForm/RejestrationForm'

const MainContent = () => {
    return(
        <Switch>
            {/* <Route path="/:info?" exact> */}
            <Route path="/" exact>
                <OrderAreaa />
            </Route>

            <Route path="/Opinions">
                <ShopOpinions />
            </Route>

            <Route path="/BasketSummary">
                <BasketSummary />
            </Route>

            <Route path="/ShoppingOption">
                <ShoppingOption />
            </Route>

            <Route path='/OrderForm'>
                <OrderForm />
            </Route>

            <Route path="/rejestrationForm"> 
                <RejestrationForm />
            </Route>

            <Route>Nie ma takiej podstrony!</Route>
        </Switch>            
    )
}

export default MainContent;