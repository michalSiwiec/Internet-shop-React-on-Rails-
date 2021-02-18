import React, {FC} from 'react'

interface Props {price: number}

const PriceColumn:FC<Props> = ({price}) => <td><span>{price}</span></td>

export default PriceColumn
