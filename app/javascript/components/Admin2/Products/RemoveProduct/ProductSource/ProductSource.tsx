import React, {FC} from 'react'

interface Props {source: string}

const ProductSource:FC<Props> = ({source}) => {
    return (
        <div>
            <img src={source} alt="Zdjęcie produktu" />
        </div>
    )
}

export default ProductSource
