import React from 'react'

import {Link} from 'react-router-dom'

const CommonShoppingButton = () => {
    return (
        <div>
            <Link to="/OrderForm">
                <button className="shopping-without-rejestration-btn">Kup bez rejestracji</button>
            </Link>
        </div>
    )
}

export default CommonShoppingButton
