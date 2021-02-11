import React from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../assets/Fontello/fontello-d1609120/css/fontello.css'

const AddClientButton = () => {
    return (
        <Link to="/admin/Users/addUser">
            <button className="add-client-button">
                Dodaj klienta
                <i className="icon-user-plus"></i> 
            </button>
        </Link>
    )
}

export default AddClientButton
