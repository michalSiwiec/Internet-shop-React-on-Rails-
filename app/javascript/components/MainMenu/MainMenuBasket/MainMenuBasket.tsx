import React from 'react';

import {Link} from 'react-router-dom';

import {useSelector} from 'react-redux'

const MainMenuBasket = () => {
    const wholePrice = useSelector((state:any) => state.basketReducer.wholePrice)

    return (
        <div className='basket-container'>
            <Link to='/home/BasketSummary'> <p>{wholePrice} złrxfqgupkzzzas</p> </Link>
        </div> 
    )
}

export default MainMenuBasket;