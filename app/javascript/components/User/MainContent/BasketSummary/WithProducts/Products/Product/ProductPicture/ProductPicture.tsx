import React, {FC} from 'react'

import {IProduct} from '../../../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    product: IProduct,
    removeProductFromBasket: (id: number, quantity: number) => void,
    quantity: number
}

const ProductPicture:FC<Props> = ({product, removeProductFromBasket, quantity}) => {
    return (
        <div className="picture-container">
            <figure>
                <img src={product.source} alt="" className="picture-container__picture"/>
                <figcaption className="picture-container__remove-product" onClick={() => removeProductFromBasket(product.id, quantity)}>Usuń</figcaption>
            </figure>
        </div>
    )
}

export default ProductPicture
