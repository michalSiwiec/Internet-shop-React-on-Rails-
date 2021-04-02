import React from 'react'

import {useSelector} from 'react-redux'

import {IReduxState} from '../../../TypeScript/Interfaces/Interfaces'

import AdminPanel from './AdminPanel/AdminPanel'
import LoginPanel from './LoginPanel/LoginPanel'

const Admin2 = () => {
    const adminID = useSelector((state: IReduxState) => state.adminsReducer.admin.id)
    let response = <LoginPanel />

    if(adminID !== 0)
        response = <AdminPanel />
    // let response = <AdminPanel />

    return response
}

export default Admin2
