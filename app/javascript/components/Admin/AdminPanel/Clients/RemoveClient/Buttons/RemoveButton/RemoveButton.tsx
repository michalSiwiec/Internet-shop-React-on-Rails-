import React, {FC} from 'react'

import {useHistory} from 'react-router-dom'

interface Props{userID: string}

const RemoveButton:FC<Props> = ({userID}) => {
    const history = useHistory()

    const removeUser = (e: React.SyntheticEvent) => {
        e.preventDefault()

        fetch(`/api/v1/user/${userID}`, {method: 'DELETE'})
        .then(() => history.push('/admin/Users'))
    }

    return(
        <button onClick={(e) => removeUser(e)} className="remove-user-form__buttons-container__button">Usuń</button>
    )
}

export default RemoveButton
