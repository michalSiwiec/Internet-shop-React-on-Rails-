import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    productID: number
}

const RemoveProductButton:FC<Props> = ({productID}) => {
    return (
        <div>
            <Link to={`/admin/removeProduct/${productID}`}>
                <button className="remove-button">Usuń</button>
            </Link>
        </div>
    )
}

export default RemoveProductButton

