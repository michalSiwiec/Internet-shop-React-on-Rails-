import React, {FC} from 'react'

interface Props {price: number}

const PriceColumn:FC<Props> = ({price}) => <td className="table__td --invisible"><span>{price}</span></td>

export default PriceColumn
