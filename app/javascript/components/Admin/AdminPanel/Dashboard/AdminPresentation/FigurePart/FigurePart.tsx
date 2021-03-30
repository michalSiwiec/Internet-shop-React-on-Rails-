import React from 'react'

import Header from './Header/Header'
import AdminFigure from './AdminFigure/AdminFigure'
import LogOutAdminInscription from './LogOutAdminInscription/LogOutAdminInscription'

const FigurePart = () => {
    return (
        <div className="figure-part-container">
            <Header />
            <AdminFigure />
            <LogOutAdminInscription />
        </div>
    )
}



export default FigurePart
