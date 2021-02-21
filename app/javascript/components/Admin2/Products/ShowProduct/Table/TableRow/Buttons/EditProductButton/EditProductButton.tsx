import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {productID: number}

const EditProductButton:FC<Props> = ({productID}) => {
    return (
        <Link to={`/admin/Products/editProduct/${productID}`}>
            <button className="table__td__edit-button">Edytuj</button>
        </Link>
    )
}

export default EditProductButton
