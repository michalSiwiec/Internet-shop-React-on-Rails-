import React from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../redux/admin/actions'

const LogOutAdminInscription = () => {
    const dispatch = useDispatch()

    type TlogOutUser = () => {type: string}
    const logOutUser: TlogOutUser = () => dispatch(actions.logOutAdmin())
    
    return(
        <p onClick={logOutUser}>Wyloguj</p>
    )
}

export default LogOutAdminInscription
