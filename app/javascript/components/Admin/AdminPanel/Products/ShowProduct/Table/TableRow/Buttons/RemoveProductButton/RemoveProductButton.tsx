import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {productID: number}

const RemoveProductButton:FC<Props> = ({productID}) => {
    // console.log(productID)
    // console.log(typeof productID)
    return (
        <Link to={`/admin/Products/removeProduct/${productID}`}>
            <button className="table__td__remove-button">Usuń</button>
        </Link>
    )
}

export default RemoveProductButton

