import React from 'react'

import {Link} from 'react-router-dom'

const RealizeButton = () => {
    return(
        <Link to="/admin/Orders">
            <button onClick={() => alert('I am realizing order')} className="buttons-container__button">Realizuj zamówienie</button>
        </Link>
    )
}
    

export default RealizeButton
