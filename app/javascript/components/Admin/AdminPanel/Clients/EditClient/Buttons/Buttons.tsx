import React, {FC} from 'react'

import EditButton from './EditButton/EditButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {
    editUser: any
}

const Buttons:FC<Props> = ({editUser}) => {
    return (
        <div className="buttons-part-container">
            <CancelButton />
            <EditButton editUser={editUser}/>
        </div>
    )
}

export default Buttons