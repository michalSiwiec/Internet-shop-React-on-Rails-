import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {productID: number}

const EditProductButton:FC<Props> = ({productID}) => {
    return (
        <Link to={`/admin/Products/editProduct/${productID}`}>
            <div>
                <button className="edit-button">Edytuj</button>
            </div>
        </Link>
    )
}

export default EditProductButton
