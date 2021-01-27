import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    editUser: any
}

const EditButton:FC<Props> = ({editUser}) => {
    return (
        <Link to="/admin">
            <button onClick={editUser}>Edytuj</button>
        </Link>
    )
}

export default EditButton
