import React, {FC} from 'react'

import EditButton from './EditButton/EditButton'
import CancelButton from './CancelButton/CancelButton'

interface Props{editProduct: (e: React.SyntheticEvent) => void}

const OptionsButton:FC<Props> = ({editProduct}) => {
    return (
        <div className="button-container">
            <CancelButton />
            <EditButton editProduct={editProduct} />
        </div>
    )
}

export default OptionsButton
