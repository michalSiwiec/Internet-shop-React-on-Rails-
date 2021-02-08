import React from 'react'

import Header from './Header/Header'
import AdminFigure from './AdminFigure/AdminFigure'
import LogOutAdminInscription from './LogOutAdminInscription/LogOutAdminInscription'

// import '../../../../../../../assets/stylesheets/AdminPanel/LeftMenu/AdminPresentation/AdminPresentation.scss'

const AdminPresentation= () => {
    return (
        <div className="admin-presentation-container">
            <Header />
            <AdminFigure />
            <LogOutAdminInscription />
        </div>
    )
}

export default AdminPresentation
