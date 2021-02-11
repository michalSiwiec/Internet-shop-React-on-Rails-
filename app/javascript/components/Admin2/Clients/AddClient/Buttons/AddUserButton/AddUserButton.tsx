import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props{
    addUser: any
}

const AddUserButton:FC<Props> = ({addUser}) => {
    return (
        <Link to="/admin/Users">
            <button onClick={(e) => addUser(e)}>Dodaj</button>
        </Link>
    )
}

export default AddUserButton
