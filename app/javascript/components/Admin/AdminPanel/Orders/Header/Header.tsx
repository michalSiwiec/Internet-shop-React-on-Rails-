import React from 'react'

import {Link} from 'react-router-dom'

const Header= () => {
    return(
        <div className="header-part-container">
            <Link to="/admin">
                <button>Cofnij</button>
            </Link>
            <h2>Lista zamówień</h2>
        </div>
    )
}

export default Header
