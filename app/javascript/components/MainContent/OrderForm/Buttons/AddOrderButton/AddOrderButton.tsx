import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {
    addOrder: any
}

const AddOrderButton:FC<Props> = ({addOrder}) => {
    return (
        <div className="data-container">
            <Link to=""><button onClick={addOrder}>Złóz zamówienie</button></Link>
        </div>
    )
}

export default AddOrderButton
