import React, {FC} from 'react'

interface Props {
    detail: any
}

const Product:FC<Props> = ({detail}) => {
    return(
        <div className="product-container">
            <p className="product-container__p">
                Nazwa produktu
                <span className="product-container__span">{detail.product_description}</span>
            </p>

            <p className="product-container__p">
                Cena
                <span className="product-container__span">{detail.product_price}</span>
            </p>

            <p className="product-container__p">
                Ilość
                <span className="product-container__span">{detail.quantity}</span>
            </p> 
        </div>
    )
}

export default Product
