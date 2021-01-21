import React, {FC} from 'react'

import KeyWordColumn from './KeyWordColumn/KeyWordColumn'
import ProductTypeColumn from './ProductTypeColumn/ProductTypeColumn'
import QuantityAvailableColumn from './QuantityAvailableColumn/QuantityAvailableColumn'
import PriceColumn from './PriceColumn/PriceColumn'
import DescriptionColumn from './DescriptionColumn/DescriptionColumn'
import SourceColumn from './SourceColumn/SourceColumn'
import EditProductButton from './EditProductButton/EditProductButton'
import RemoveProductButton from './RemoveProductButton/RemoveProductButton'

interface Props{
    product: any,
}

const TableRow:FC<Props> = ({product}) => {
    return (
        <tr key={`product ${product.id}`}>
            <SourceColumn source={product.source}/>
            <DescriptionColumn description={product.description}/>
            <PriceColumn price={product.price}/>
            <QuantityAvailableColumn quantity_available={product.quantity_available}/>
            <ProductTypeColumn product_type={product.product_type}/>
            <KeyWordColumn key_word={product.key_word}/>
            <td>
                <EditProductButton productID = {product.id}/>
                <RemoveProductButton productID={product.id}/>
            </td>
        </tr>
    )
}

export default TableRow
