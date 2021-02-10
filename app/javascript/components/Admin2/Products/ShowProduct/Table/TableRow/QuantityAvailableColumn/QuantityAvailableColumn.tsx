import React, {FC} from 'react'

interface Props {
    quantity_available: any
}

const QuantityAvailableColumn:FC<Props> = ({quantity_available}) => <td><span>{quantity_available}</span></td>

export default QuantityAvailableColumn
