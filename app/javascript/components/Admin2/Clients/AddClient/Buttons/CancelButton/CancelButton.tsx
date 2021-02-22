import React from 'react'

import {Link} from 'react-router-dom'

const CancelButton = () => {
    return (
        <Link to="/admin/Users">
            <button className="buttons-part-container__button">Anuluj</button>
        </Link>
    )
}

export default CancelButton
