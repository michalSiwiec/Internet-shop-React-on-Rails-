import React, {FC} from 'react'

interface Props {
    checkDataForm: any,
}

const RejestrationButton:FC<Props> = ({checkDataForm}) => {
    return (
        <div className="submit-container">
            <button onClick={(e) => checkDataForm(e)}>Załóz konto</button>
        </div>
    )
}

export default RejestrationButton
