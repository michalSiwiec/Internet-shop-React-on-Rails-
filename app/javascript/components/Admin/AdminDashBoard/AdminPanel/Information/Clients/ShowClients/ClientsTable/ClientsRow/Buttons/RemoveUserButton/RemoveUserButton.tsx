import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    userID: number
}

const RemoveUserButton:FC<Props> = ({userID}) =>  {
    return (
        <Link to={`/admin/removeUser/${userID}`}>
            <div><button className="remove-user-button">Usuń</button></div>
        </Link>
    )
}

export default RemoveUserButton
