import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props{
    userID: string
}

const RemoveButton:FC<Props> = ({userID}) => {

    const removeUser = () => {
        fetch(`/api/v1/users/remove_user?userID=${userID}`, {method: 'DELETE'})
        .then(response => {
            if(response.ok)
                return response.text()
            else
                throw Error(response.statusText);
        })
    }

    return(
        <Link to="/admin/">
            <button onClick={removeUser}>Usuń uzytkownika</button>
        </Link>
    )
}

export default RemoveButton
