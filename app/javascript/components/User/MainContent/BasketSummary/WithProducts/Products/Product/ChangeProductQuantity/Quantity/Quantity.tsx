import React, {FC} from 'react'

interface Props{
    product: any,
    updateQuantityProduct: any
}

const Quantity:FC<Props> = ({product, updateQuantityProduct}) => {
    return (
        <div>
            <input type="number" min="1" defaultValue={product.quantity} onChange={(e) => updateQuantityProduct(product.id, e.target.value)}/>
        </div>
    )
}

export default Quantity
