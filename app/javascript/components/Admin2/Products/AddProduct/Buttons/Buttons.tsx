import React, {FC} from 'react'

import AddButton from './AddButton/AddButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {addProduct: (e: React.SyntheticEvent) => void}

const Buttons:FC<Props> = ({addProduct}) => {
    return (
        <div className="add-user-form__input-container add-user-form__buttons-container">
            <CancelButton />
            <AddButton addProduct={addProduct} />
        </div>
    )
}

export default Buttons
