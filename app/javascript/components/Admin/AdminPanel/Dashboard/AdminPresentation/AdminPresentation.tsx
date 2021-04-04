import React from 'react'

import FigurePart from './FigurePart/FigurePart'
import DescriptionPart from './DescriptionPart/DescriptionPart'

import '../../../../../../assets/stylesheets/Admin/Dashboard/AdminPanel/AdminPresentation/AdminPresentation.scss'

const AdminPresentation= () => {
    return (
        <div className="admin-presentation-container">
            <FigurePart />
            <DescriptionPart />
        </div>
    )
}

export default AdminPresentation
