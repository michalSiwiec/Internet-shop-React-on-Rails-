import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    editAdmin: any
}

const EditAdminButton:FC<Props> = ({editAdmin}) =>  {
    return (
        <Link to="/admin/">
            <button onClick={(e) => editAdmin(e)}>Edytuj</button>
        </Link>
    )
}

export default EditAdminButton
