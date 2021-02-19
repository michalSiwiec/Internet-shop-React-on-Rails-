import React, {FC} from 'react'

import {IProduct} from '../../../../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props{
    product: IProduct,
    updateQuantityProduct: (id: number, quantity: string) => void,
    quantity: number
}

const Quantity:FC<Props> = ({product, updateQuantityProduct, quantity}) => {
    return (
        <div>
            <input type="number" min="1" defaultValue={quantity} onChange={(e) => updateQuantityProduct(product.id, e.target.value)}/>
        </div>
    )
}

export default Quantity
