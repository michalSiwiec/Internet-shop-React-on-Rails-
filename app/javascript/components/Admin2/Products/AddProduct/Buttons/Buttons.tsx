import React, {FC} from 'react'

import AddButton from './AddButton/AddButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {addProduct: (e: React.SyntheticEvent) => void}

const Buttons:FC<Props> = ({addProduct}) => {
    return (
        <div>
            <CancelButton />
            <AddButton addProduct={addProduct} />
        </div>
    )
}

export default Buttons
