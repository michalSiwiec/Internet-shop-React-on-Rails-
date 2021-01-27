import React, {FC} from 'react'

import CancelButton from './CancelButton/CancelButton'
import RemoveButton from './RemoveButton/RemoveButton'

interface Props {
    userID: string
}

const Buttons:FC<Props> = ({userID}) => {
    return (
        <div>
            <CancelButton />
            <RemoveButton userID={userID}/>
        </div>
    )
}

export default Buttons
