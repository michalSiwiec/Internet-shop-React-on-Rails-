import React, {FC} from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../../../../assets/Fontello/fontello-8f6edee7 2/css/fontello.css'

interface Props {userID: number}

const EditUserButton:FC<Props> = ({userID}) =>  {
    return (
        <Link to={`/admin/Users/editUser/${userID}`}>
            <div>
                <button className="edit-user-button">
                    Edytuj
                    <i className=" icon-user"></i>
                </button>
            </div> 
        </Link>
    )
}

export default EditUserButton
