import React from 'react'

import Orders from './Orders/Orders'
import Statistics from './Statistics/Statistics'
import Clients from './Clients/Clients'
import Products from './Products/Products'
import Opinions from './Opinions/Opinions'

import '../../../../../../assets/stylesheets/Admin2/Dashboard/AdminPanel/Options/Options.scss'

const Options = () => {
    return (
        <div className="options-container">
            <Orders />
            <Statistics />
            <Clients />
            <Products />
            <Opinions />
        </div>
    )
}

export default Options