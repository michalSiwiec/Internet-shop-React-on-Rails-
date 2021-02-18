import React, {FC} from 'react'

import {IProduct} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import ProductTypeColumn from './ProductTypeColumn/ProductTypeColumn'
import QuantityAvailableColumn from './QuantityAvailableColumn/QuantityAvailableColumn'
import PriceColumn from './PriceColumn/PriceColumn'
import DescriptionColumn from './DescriptionColumn/DescriptionColumn'
import SourceColumn from './SourceColumn/SourceColumn'
import EditProductButton from './EditProductButton/EditProductButton'
import RemoveProductButton from './RemoveProductButton/RemoveProductButton'

interface Props{product: IProduct}

const TableRow:FC<Props> = ({product}) => {
    return (
        <tr>
            <SourceColumn source={product.source}/>
            <DescriptionColumn description={product.description}/>
            <PriceColumn price={product.price}/>
            <QuantityAvailableColumn quantity_available={product.quantity_available}/>
            <ProductTypeColumn product_type={product.product_type}/>
            <td>
                <EditProductButton productID = {product.id}/>
                <RemoveProductButton productID={product.id}/>
            </td>
        </tr>
    )
}

export default TableRow
