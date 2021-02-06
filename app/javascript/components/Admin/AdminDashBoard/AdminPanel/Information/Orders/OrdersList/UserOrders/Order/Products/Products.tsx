import React, {FC} from 'react'

import Product from './Product/Product'

interface Props {
    details: any
}

const Products:FC<Props> = ({details}) => {
    return(
        <div>
            {details.map(detail => <Product detail={detail} />)}
        </div>
    )
}

export default Products
