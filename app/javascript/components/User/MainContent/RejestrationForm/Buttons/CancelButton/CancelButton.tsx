import React from 'react'

import {Link} from 'react-router-dom'

const CancelButton = () => {
    return (
        <Link to="/ShoppingOption">
            <button>Anuluj</button>
        </Link>
    )
}

export default CancelButton
