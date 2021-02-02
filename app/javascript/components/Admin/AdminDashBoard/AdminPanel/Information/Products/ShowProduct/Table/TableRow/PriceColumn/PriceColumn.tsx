import React, {FC} from 'react'

interface Props {
    price: any
}

const PriceColumn:FC<Props> = ({price}) => <td><span>{price}</span></td>

export default PriceColumn
