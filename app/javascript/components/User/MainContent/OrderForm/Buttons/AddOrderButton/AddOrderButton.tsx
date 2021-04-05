import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {addOrder: () => void}

const AddOrderButton:FC<Props> = ({addOrder}) => {
    return (
        <Link to="/orderCompletted">
            <button onClick={(e) => addOrder(e)} className="buttons-container__button">Złóz zamówienie</button>
        </Link>
    )
}

export default AddOrderButton
