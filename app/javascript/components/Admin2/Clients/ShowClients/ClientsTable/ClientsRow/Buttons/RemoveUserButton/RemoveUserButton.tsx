import React, {FC} from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../../../../assets/Fontello/fontello-8f6edee7 2/css/fontello.css'

interface Props {userID: number}

const RemoveUserButton:FC<Props> = ({userID}) =>  {
    return (
        <Link to={`/admin/Users/removeUser/${userID}`}>
            <div>
                <button className="remove-user-button">
                    Usuń
                    <i className="icon-user-times"></i>
                </button>
            </div>
        </Link>
    )
}

export default RemoveUserButton
