import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props{
    addUser: any
}

const AddUserButton:FC<Props> = ({addUser}) => {
    return (
        <Link to="/admin/">
            <button onClick={addUser}>Dodaj</button>
        </Link>
    )
}

export default AddUserButton
