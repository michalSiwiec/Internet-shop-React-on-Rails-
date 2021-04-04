import React, {FC} from 'react'

import RejestrationButton from './RejestrationButton/RejestrationButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {registerUser: (e: React.SyntheticEvent) => void}

const Buttons:FC<Props> = ({registerUser}) => {
    return (
        <div className="submit-container">
            <CancelButton />
            <RejestrationButton registerUser={registerUser} />
        </div>
    )
}

export default Buttons
