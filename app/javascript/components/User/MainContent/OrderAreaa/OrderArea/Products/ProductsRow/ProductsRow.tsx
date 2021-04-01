import React, {FC} from 'react'

interface Props {
    productsInRow: any,
    className: string
}

const ProductsRow:FC<Props> = ({productsInRow, className}) => {
    return (
        <div className={`row ${className}`}>
            {productsInRow}
        </div>
    )
}

export default ProductsRow
