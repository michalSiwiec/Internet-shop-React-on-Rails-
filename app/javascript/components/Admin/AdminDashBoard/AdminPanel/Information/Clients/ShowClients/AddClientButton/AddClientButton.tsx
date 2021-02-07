import React from 'react'

import {Link} from 'react-router-dom'

import '../../../../../../../../../assets/Fontello/fontello-d1609120/css/fontello.css'

interface Props {

}

const AddClientButton = () => {
    return (
        <Link to="/admin/addUser">
            <button className="add-client-button">
                Doda klienta
                <i className="icon-user-plus"></i> 
            </button>
        </Link>
    )
}

export default AddClientButton
