import React, {FC} from 'react'

interface Props {
    detail: any
}

const Product:FC<Props> = ({detail}) => {
    return(
        <div>
            <p>{`Nazwa produktu: ${detail.product_description}`}</p>
            <p>{`Cena: ${detail.product_price}`}</p>
            <p>{`Ilośsxć: ${detail.quantity}`}</p>
        </div>
    )
}

export default Product
