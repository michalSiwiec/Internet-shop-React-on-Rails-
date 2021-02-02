import React, {FC} from 'react'

import AdminPicture from './AdminPicture/AdminPicture'
import AdminSignature from './AdminSignature/AdminSignature'


const AdminFigure = () => {
    return(
        <figure>
            <AdminPicture />
            <AdminSignature />
        </figure>
    )
}

export default AdminFigure
