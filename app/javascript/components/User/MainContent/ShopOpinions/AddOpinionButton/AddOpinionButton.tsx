import React, {FC} from 'react'

import Header from '../Header/Header'

interface Props {showWindow: () => void}

const AddOpinionButton:FC<Props> = ({showWindow}) => {
    return (
        <div className="add-opinion-container">
            <Header />
            <button onClick={showWindow}>Dodaj opinie</button>
        </div>
    )
}

export default AddOpinionButton
