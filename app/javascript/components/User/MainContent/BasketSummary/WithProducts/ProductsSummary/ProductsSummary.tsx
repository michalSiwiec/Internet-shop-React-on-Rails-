import React from 'react'

import {useSelector} from 'react-redux'

import {Link} from 'react-router-dom'

import {IReduxState} from '../../../../../../../TypeScript/Interfaces/Interfaces'

const ProductsSummary = () => {
    const wholePrice = useSelector((state: IReduxState) => state.basketReducer.wholePrice)

    return (
        <div className="summary-part">
            <div className="subcontainer">
                <p>Do zapłaty<span className="subcontainer__price">{wholePrice}</span>zł</p>
                <p>+ transport <span className="subcontainer__price-of-transport">15</span> zł</p>
            </div>

            <div className="subcontainer">
                <Link to='/home/ShoppingOption'>
                    <input type="button" value="Przejdź dalej" className="subcontainer__continue-shopping-btn" />
                </Link>
            </div>
        </div>
    )
}

export default ProductsSummary
