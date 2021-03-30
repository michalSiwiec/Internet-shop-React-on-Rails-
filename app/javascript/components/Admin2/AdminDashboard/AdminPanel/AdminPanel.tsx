import React from 'react'

import AdminPresentation from './AdminPresentation/AdminPresentation'
import Options from './Options/Options'

const AdminPanel = () => {
    console.log("Admin panel")
    return (
        <>
            <AdminPresentation />
            <Options />
        </>
    )
}

export default AdminPanel
