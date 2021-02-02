import React from 'react'
 
import {Link} from 'react-router-dom'

const AdminPicture = () => {
    const logo =  require("../../../../../../../../assets/images/adminPicture.png")

    return(
        <Link to={`/admin/editAdmin`}>
            <img src={logo} alt="" />
        </Link>
    )
}

export default AdminPicture
