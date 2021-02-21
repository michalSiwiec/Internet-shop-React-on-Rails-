import React, {FC} from 'react'

interface Props {quantity_available: number}

const QuantityAvailableColumn:FC<Props> = ({quantity_available}) => <td className="table__td --invisible"><span>{quantity_available}</span></td>

export default QuantityAvailableColumn
