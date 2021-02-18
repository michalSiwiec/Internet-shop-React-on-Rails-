import React, {FC} from 'react'

interface Props {product_type: string}

const ProductTypeColumn:FC<Props> = ({product_type}) => <td><span>{product_type}</span></td>

export default ProductTypeColumn
