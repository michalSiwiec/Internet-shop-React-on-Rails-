import React, {FC} from 'react'

interface Props {
    productsInRow: any,
    className: string
}

const ProductsRow:FC<Props> = ({productsInRow, className}) => {
    return (
        <div className={`row ${className}`} key={`row${Math.random() * 1000000}`}>
            {productsInRow}
        </div>
    )
}

export default ProductsRow
