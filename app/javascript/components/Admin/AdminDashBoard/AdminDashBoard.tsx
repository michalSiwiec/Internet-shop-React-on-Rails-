import React from 'react'

import {useSelector} from 'react-redux'

import LogInPanel from './LogInPanel/LogInPanel'
import AdminPanel from './AdminPanel/AdminPanel'

const AdminDashBoard = () => {

    const adminLogIn = useSelector((state:any) => state.adminsReducer.admin.logIn)

    return (
        <div>
            { adminLogIn ? <AdminPanel /> : <LogInPanel /> }
        </div>
    )
}

export default AdminDashBoard
