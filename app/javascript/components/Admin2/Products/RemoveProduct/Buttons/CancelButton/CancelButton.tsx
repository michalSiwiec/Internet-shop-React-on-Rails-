import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {

}

const CancelButton:FC<Props> = () => {
    return (
        <Link to="/admin/">
            <button>Anuluj</button>
        </Link>
    )
}

export default CancelButton
