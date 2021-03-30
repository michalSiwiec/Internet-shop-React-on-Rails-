import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {userID: number}

const RemoveUserButton:FC<Props> = ({userID}) =>  {
    console.log(userID)

    return (
        <Link to={`/admin/Users/removeUser/${userID}`}>
            <div>
                <button className="table__td__remove-button">
                    Usuń
                    <i className="icon-user-times"></i>
                </button>
            </div>
        </Link>
    )
}

export default RemoveUserButton
