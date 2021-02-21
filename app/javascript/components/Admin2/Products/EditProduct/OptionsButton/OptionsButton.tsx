import React, {FC} from 'react'

import EditButton from './EditButton/EditButton'
import CancelButton from './CancelButton/CancelButton'

interface Props{editProduct: (e: React.SyntheticEvent) => void}

const OptionsButton:FC<Props> = ({editProduct}) => {
    return (
        <div className="edit-user-form__input-container edit-user-form__buttons-container">
            <CancelButton />
            <EditButton editProduct={editProduct} />
        </div>
    )
}

export default OptionsButton
