import React from 'react'

import {Link} from 'react-router-dom'

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
