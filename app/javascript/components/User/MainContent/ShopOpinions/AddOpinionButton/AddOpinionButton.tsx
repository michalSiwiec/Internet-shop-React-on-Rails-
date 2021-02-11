import React, {FC} from 'react'

interface Props {
    showWindow: any
}

const AddOpinionButton:FC<Props> = ({showWindow}) => {
    return (
        <div className="add-opinion-container">
            <button onClick={showWindow}>Dodaj opinie</button>
        </div>
    )
}

export default AddOpinionButton