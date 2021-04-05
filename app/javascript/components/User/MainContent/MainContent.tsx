import React from 'react'

import {Route, Switch, useRouteMatch} from 'react-router-dom'

import OrderAreaa from './OrderAreaa/OrderAreaa'
import ShopOpinions from './ShopOpinions/ShopOpinions'
import OrderForm from './OrderForm/OrderForm'
import ShoppingOption from './ShoppingOption/ShoppingOption'
import BasketSummary from './BasketSummary/BasketSummary'
import RejestrationForm from './RejestrationForm/RejestrationForm'

const MainContent = () => {
    const {path} = useRouteMatch()

    return(
        <Switch>
            <Route path={`${path}Opinions`}>
                <ShopOpinions />
            </Route>

            <Route path={`${path}BasketSummary`}>
                <BasketSummary />
            </Route>

            <Route path={`${path}ShoppingOption`}>
                <ShoppingOption />
            </Route>

            <Route path={`${path}OrderForm`}>
                <OrderForm />
            </Route>

            <Route path={`${path}rejestrationForm`}> 
                <RejestrationForm />
            </Route>

            <Route path={`${path}:info?`} exact>
                <OrderAreaa />
            </Route>

            <Route>Nie ma takiej podstrony!</Route>
        </Switch>            
    )
}

export default MainContent;