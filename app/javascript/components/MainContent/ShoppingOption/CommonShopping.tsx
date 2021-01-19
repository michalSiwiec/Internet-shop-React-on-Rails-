import React from 'react'

import {Link} from 'react-router-dom'

const CommonShopping = () =>  {
    return (
        <div className="shopping-without-rejestration-container">
            <div className="ornament">
                <p>Kup bez rejestracji</p>
            </div>

            <div className="fileds-container">
                <div>
                    <p className="text">
                        Nie masz konta i nie chcesz zakładać?
                        Skorzystaj z opcji zakupów bez rejestracji!
                    </p>
                </div>

                <div>
                    <Link to="/home/OrderForm"><button className="shopping-without-rejestration-btn">Kup bez rejestracji</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CommonShopping
