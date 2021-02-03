import React, {FC} from 'react'

interface Props {
    submitOrder: any
}

const AddOrderButton:FC<Props> = ({submitOrder}) => {
    return (
        <div className="data-container">
            <button onClick={submitOrder}>Złóz zamówienie</button>
        </div>
    )
}

export default AddOrderButton
