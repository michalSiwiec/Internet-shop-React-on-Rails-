import React from 'react'

import {Link} from 'react-router-dom'

interface Props {

}

const AddClientButton = () => {
    return (
        <Link to="/admin/addUser">
            <button className="add-client-button">Dodaj klienta</button>
        </Link>
    )
}

export default AddClientButton
