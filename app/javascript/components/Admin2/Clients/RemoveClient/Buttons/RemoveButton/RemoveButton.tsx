import React, {FC} from 'react'

import {useHistory} from 'react-router-dom'

interface Props{userID: string}

const RemoveButton:FC<Props> = ({userID}) => {
    const history = useHistory()

    const removeUser = (e: any) => {
        e.preventDefault()

        fetch(`/api/v1/users/${userID}`, {method: 'DELETE'})
        .then(() => history.push('/admin/Users'))
    }

    return(
        <button onClick={(e) => removeUser(e)}>Usuń uzytkownika</button>
    )
}

export default RemoveButton
