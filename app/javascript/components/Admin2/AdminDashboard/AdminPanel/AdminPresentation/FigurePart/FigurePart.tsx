import React from 'react'

import Header from '../FigurePart/Header/Header'
import AdminFigure from '../FigurePart/AdminFigure/AdminFigure'
import LogOutAdminInscription from '../FigurePart/LogOutAdminInscription/LogOutAdminInscription'

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
