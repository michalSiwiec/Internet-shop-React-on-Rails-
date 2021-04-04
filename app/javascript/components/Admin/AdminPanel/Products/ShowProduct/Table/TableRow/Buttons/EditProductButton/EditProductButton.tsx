import React, {FC} from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

interface Props {productID: number}

const EditProductButton:FC<Props> = ({productID}) => {
    const {path} = useRouteMatch()

    return (
        <Link to={`${path}/editProduct/${productID}`}>
            <button className="table__td__edit-button">Edytuj</button>
        </Link>
    )
}

export default EditProductButton
