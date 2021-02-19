import React from 'react'

import Header from './Header/Header'
import AdminFigure from './AdminFigure/AdminFigure'
import LogOutAdminInscription from './LogOutAdminInscription/LogOutAdminInscription'

const AdminPresentation= () => {
    return (
        <div className="admin-presentation-container">
            <div className="left-part">
                <Header />
                <AdminFigure />
                <LogOutAdminInscription />
            </div>

            <div className="right-part">
                <h1>Admin Panesl</h1>
            </div>
        </div>
    )
}

export default AdminPresentation
