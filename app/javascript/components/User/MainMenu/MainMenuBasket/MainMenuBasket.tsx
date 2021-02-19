import React from 'react';

import {IReduxState} from '../../../../../TypeScript/Interfaces/Interfaces'

import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux'

const MainMenuBasket = () => {
    const wholePrice = useSelector((state: IReduxState) => state.basketReducer.wholePrice)

    return (
        <div className='basket-container'>
            <Link to='/home/BasketSummary'> <p>{wholePrice} zł</p> </Link>
        </div> 
    )
}

export default MainMenuBasket;