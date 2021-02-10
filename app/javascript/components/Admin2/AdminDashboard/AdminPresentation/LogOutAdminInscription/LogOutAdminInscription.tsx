import React from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../redux/admin/actions'

const LogOutAdminInscription = () => {
    const dispatch = useDispatch()

    const logOutUser = () => dispatch(actions.logOutAdmin())
    
    return(
        <p onClick={logOutUser}>Wyloguj</p>
    )
}

export default LogOutAdminInscription
