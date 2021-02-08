import React from 'react'

import Ornament from './Ornament/Ornament'
import RejestrationButton from './RejestrationButton/RejestrationButton'

const Rejestration = () =>  {
    return (
        <div className="rejestration-container">
            <Ornament />

            <div className="fileds-container">
                <RejestrationButton />
            </div>
        </div>
    )
}

export default Rejestration
