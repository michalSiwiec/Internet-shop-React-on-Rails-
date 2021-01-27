import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
}

const RemoveUserButton:FC<Props> = () =>  {
    return (
        <Link to="/admin/removeUser">
            <div><button className="remove-user-button">Usuń</button></div>
        </Link>
    )
}

export default RemoveUserButton
