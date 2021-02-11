import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {

}

const CancelButton = () => {
    return (
        <Link to="/admin/Products">
            <button>Anuluj</button>
        </Link>
    )
}

export default CancelButton