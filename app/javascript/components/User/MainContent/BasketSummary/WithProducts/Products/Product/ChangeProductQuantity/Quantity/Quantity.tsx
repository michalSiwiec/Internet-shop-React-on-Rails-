import React, {FC} from 'react'

interface Props{
    product: any,
    updateQuantityProduct: any,
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
