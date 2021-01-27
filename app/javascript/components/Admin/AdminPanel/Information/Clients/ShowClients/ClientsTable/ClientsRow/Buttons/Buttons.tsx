import React, {FC} from 'react'

import {Link} from 'react-router-dom'

import RemoveUserButton from './RemoveUserButton/RemoveUserButton'
import EditUserButton from './EditUserButton/EditUserButton'

interface Props{
    userID: number
}

const Buttons:FC<Props> = ({userID}) => {
    return (
        <td>
            <RemoveUserButton />
            <EditUserButton userID={userID} />
        </td>
    )
}

export default Buttons
