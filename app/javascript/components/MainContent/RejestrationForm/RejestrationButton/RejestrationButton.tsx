import React, {FC} from 'react'

interface Props {
    registerUser: any,
}

const RejestrationButton:FC<Props> = ({registerUser}) => {
    return (
        <div className="submit-container">
            <button onClick={(e) => registerUser(e)}>Załóz konto</button>
        </div>
    )
}

export default RejestrationButton
