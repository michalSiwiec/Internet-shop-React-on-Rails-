import React, {FC} from 'react'

import AddOpinionButton from './AddOpinionButton/AddOpinionButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {
    setWantAddOpinion: any,
    addOpinion: any
}

const Buttons:FC<Props> = ({setWantAddOpinion, addOpinion}) => {
    return (
        <div className="buttons-container">
            <CancelButton setWantAddOpinion={setWantAddOpinion} />
            <AddOpinionButton addOpinion={addOpinion} />
        </div>
    )
}

export default Buttons
