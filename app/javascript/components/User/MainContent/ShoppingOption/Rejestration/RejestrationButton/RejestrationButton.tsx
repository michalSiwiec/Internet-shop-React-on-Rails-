import React from 'react'

import {Link} from 'react-router-dom'

const RejestrationButton = () => {
    return (
        <div>
            <Link to="/rejestrationForm">
                <button className="rejestration-btn">Zarejestruj się</button>
            </Link>
        </div>
    )
}

export default RejestrationButton
