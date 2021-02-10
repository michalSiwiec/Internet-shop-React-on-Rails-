import React, {FC} from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../../../../assets/Fontello/fontello-d1609120/css/fontello.css'

interface Props {userID: number}

const EditUserButton:FC<Props> = ({userID}) =>  {
    return (
        <Link to={`/admin/editUser/${userID}`}>
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
