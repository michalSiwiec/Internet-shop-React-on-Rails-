import React, {FC} from 'react'

import Product from './Product/Product'

interface Props {details: any}

const Products:FC<Props> = ({details}) => {
    console.log(details)

    return(
        <div>
            {details.map(detail => <Product detail={detail} key={`product${detail.product_description}`}/>)}
        </div>
    )
}

export default Products
