import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    userID: number
}

const EditUserButton:FC<Props> = ({userID}) =>  {
    return (
        <Link to={`/admin/editUser/${userID}`}>
            <div><button className="edit-user-button">Edytuj</button></div> 
        </Link>
    )
}

export default EditUserButton
