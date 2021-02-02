import React, {FC} from 'react'

import CancelButton from './CancelButton/CancelButton'
import AddUserButton from './AddUserButton/AddUserButton'

interface Props {
    addUser: any
}

const Buttons:FC<Props> = ({addUser}) => {
    return (
        <div className="button-options-container">
            <div>
                <CancelButton />
                <AddUserButton addUser={addUser}/>
            </div>
        </div>
    )
}

export default Buttons
