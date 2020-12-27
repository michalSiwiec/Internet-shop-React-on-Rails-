import React from 'react';
import {NavLink} from 'react-router-dom';

const MainMenuBasket = () => {
        
    return (
        <NavLink className="basketContainer__basketLink" to="/Basket" title="Zobacz koszyk">
            <i className="icon-basket basketContainer__icon"></i>
            <p className="m-0">sa</p>
        </NavLink>        
    )
}

export default MainMenuBasket;