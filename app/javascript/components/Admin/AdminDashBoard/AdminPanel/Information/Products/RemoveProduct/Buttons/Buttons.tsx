import React, {FC} from 'react'

import RemoveButton from './RemoveButton/RemoveButton'
import CancelButton from './CancelButton/CancelButton'

interface Props {
    productID: string
}

const Buttons:FC<Props> = ({productID}) => {
    return (
        <div>
            <CancelButton />
            <RemoveButton productID={productID} />
        </div>
    )
}

export default Buttons
