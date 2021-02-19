import React from 'react'

import {useSelector} from 'react-redux'

import {IReduxState} from '../../../../TypeScript/Interfaces/Interfaces'

import AdminPanel from './AdminPanel/AdminPanel'
import LogInPanel from './LogInPanel/LogInPanel'

const AdminDashboard = () => {
    const adminID = useSelector((state: IReduxState) => state.adminsReducer.admin.id)

    return (
        <>
            {adminID !== 0 ? <AdminPanel /> : <LogInPanel />}
        </>
    )
}

export default AdminDashboard
