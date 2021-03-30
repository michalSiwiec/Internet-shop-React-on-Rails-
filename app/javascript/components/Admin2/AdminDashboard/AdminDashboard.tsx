import React from 'react'

import { useHistory } from "react-router-dom";

import {useSelector} from 'react-redux'

import {IReduxState} from '../../../../TypeScript/Interfaces/Interfaces'

import AdminPanel from './AdminPanel/AdminPanel'
import LogInPanel from './LogInPanel/LogInPanel'

const AdminDashboard = () => {
    const adminID = useSelector((state: IReduxState) => state.adminsReducer.admin.id)
    const history = useHistory()

    console.log(history)
    console.log(adminID)

    return (
        <>
            {adminID !== 0 ? <AdminPanel /> : <LogInPanel />}
            {/* <AdminPanel /> */}
        </>
    )
}

export default AdminDashboard
