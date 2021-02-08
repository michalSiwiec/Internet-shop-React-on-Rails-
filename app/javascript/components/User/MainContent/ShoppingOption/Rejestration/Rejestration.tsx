import React from 'react'

import {Link} from 'react-router-dom'

const Rejestration = () =>  {
    return (
        <div className="rejestration-container">
            <div className="ornament">
                <p>Rejestracja</p>
            </div>

            <div className="fileds-container">
                <div>
                    <Link to="/home/rejestrationForm"><button className="rejestration-btn">Zarejestruj się</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Rejestration
