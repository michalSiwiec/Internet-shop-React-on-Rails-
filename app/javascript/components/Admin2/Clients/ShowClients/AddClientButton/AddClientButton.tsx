import React from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../assets/Fontello/fontello-2faec39f/css/fontello.css'

const AddClientButton = () => {
    return (
        <Link to="/admin/Users/addUser">
            <button className="add-client-button">
                Dodaj
                <i className="icon-user-plus"></i> 
            </button>
        </Link>
    )
}

export default AddClientButton
