import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props{
    editProduct: any
}

const EditButton:FC<Props> = ({editProduct}) => <Link to="/admin/"> <button onClick={editProduct}>Edytuj</button> </Link>

export default EditButton
