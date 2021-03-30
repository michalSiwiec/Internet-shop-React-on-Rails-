import React, {FC} from 'react'

interface Props {product_type: string}

const ProductTypeColumn:FC<Props> = ({product_type}) => <td className="table__td --invisible"><span>{product_type}</span></td>

export default ProductTypeColumn
