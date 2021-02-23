import React from 'react'
 
import {Link} from 'react-router-dom'

import logo from 'images/adminPicture.png';

const AdminPicture = () => {
    // const logo = require('../../../../../../../../../assets/images/adminPicture.png')

    return(
        <Link to={`/admin/editAdmin`}>
            <img src={logo} alt="" className="figure__picture"/>
        </Link>
    )
}

export default AdminPicture
