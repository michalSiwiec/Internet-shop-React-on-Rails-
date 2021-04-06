import React from 'react'

import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <Link to="/admin">
                <button>Cofinj</button>
            </Link>

            <h2>Opinie o naszym sklepie</h2>
        </>
    )
}

export default Header
