import React, {FC} from 'react'

interface Props {
    addOrder: any
}

const AddOrderButton:FC<Props> = ({addOrder}) => {
    return (
        <div className="data-container">
            <button onClick={addOrder}>Złóz zamówienie</button>
        </div>
    )
}

export default AddOrderButton
