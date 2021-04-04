import React from 'react'

import {Link} from 'react-router-dom'

const CancelButton = () => {
    return (
        <Link to="/">
            <button className="buttons-container__button">Anuluj</button>
        </Link> 
    )
}

export default CancelButton
