import React, {FC} from 'react'

import CancelButton from './CancelButton/CancelButton'
import EditAdminButton from './EditAdminButton/EditAdminButton'

interface Props {
    editAdmin: any
}

const Buttons:FC<Props> = ({editAdmin}) =>  {
    return (
        <div>
            <CancelButton />
            <EditAdminButton editAdmin={editAdmin} />
        </div>
    )
}

export default Buttons
