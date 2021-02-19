import React, {FC} from 'react'

import {Link} from 'react-router-dom'

interface Props {registerUser: (e: React.SyntheticEvent) => void}

const RejestrationButton:FC<Props> = ({registerUser}) => {
    return (
        <div className="submit-container">
            <Link to="/home/OrderForm">
                <button onClick={(e) => registerUser(e)}>Załóz konto</button>
            </Link>
        </div>
    )
}

export default RejestrationButton
