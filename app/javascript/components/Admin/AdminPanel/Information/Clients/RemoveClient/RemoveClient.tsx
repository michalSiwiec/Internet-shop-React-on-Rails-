import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {}

const RemoveClient:FC<Props> = () => {
    return (
        <div className="remove-user-container">
            <h1>Remove client</h1>
            <Link to="/admin/"><button>Powrot</button></Link>
        </div>
    )
}

export default RemoveClient
