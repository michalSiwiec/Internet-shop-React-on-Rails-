import React, {FC} from 'react'

import AddButton from './AddButton/AddButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {
    addProduct: any
}

const Buttons = ({addProduct}) => {
    return (
        <div>
            <CancelButton />
            <AddButton addProduct={addProduct} />
        </div>
    )
}

export default Buttons
