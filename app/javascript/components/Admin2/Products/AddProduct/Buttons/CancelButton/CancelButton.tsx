import React from 'react'

import {Link} from 'react-router-dom'

const CancelButton = () => {
    return (
        <Link to="/admin/Products">
            <button className="add-user-form__buttons-container__button">Anuluj</button>
        </Link>
    )
}

export default CancelButton