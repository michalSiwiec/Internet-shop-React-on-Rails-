import React, {FC} from 'react'

interface Props {
    product: any,
    removeProductFromBasket: any
}

const ProductPicture:FC<Props> = ({product, removeProductFromBasket}) => {
    return (
        <div className="picture-container">
            <figure>
                <img src={product.source} alt="" className="picture-container__picture"/>
                <figcaption className="picture-container__remove-product" onClick={() => removeProductFromBasket(product.id, product.quantity)}>Usuń</figcaption>
            </figure>
        </div>
    )
}

export default ProductPicture
