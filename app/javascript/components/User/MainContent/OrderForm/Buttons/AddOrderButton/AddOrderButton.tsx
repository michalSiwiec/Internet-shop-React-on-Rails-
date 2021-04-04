import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {addOrder: () => void}

const AddOrderButton:FC<Props> = ({addOrder}) => {
    return (
        // <Link to="/home/Offer/orderCompletted">
        //     <button onClick={addOrder} className="buttons-container__button">Złóz zamówienie</button>
        // </Link>

        <Link to="/orderCompletted">
            <button onClick={addOrder} className="buttons-container__button">Złóz zamówienie</button>
        </Link>
    )
}

export default AddOrderButton
