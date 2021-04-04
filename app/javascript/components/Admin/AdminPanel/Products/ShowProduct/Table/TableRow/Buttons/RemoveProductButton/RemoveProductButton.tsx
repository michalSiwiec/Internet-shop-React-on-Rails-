import React, {FC} from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

interface Props {productID: number}

const RemoveProductButton:FC<Props> = ({productID}) => {
    const {path} = useRouteMatch()

    return (
        <Link to={`${path}/removeProduct/${productID}`}>
            <button className="table__td__remove-button">Usuń</button>
        </Link>
    )
}

export default RemoveProductButton

