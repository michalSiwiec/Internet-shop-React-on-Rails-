import React, {FC} from 'react'

interface Props {source: string}

const ProductSource:FC<Props> = ({source}) => {
    return (
        <div className="picture-container">
            <img src={source} alt="Zdjęcie produktu" className="picture-container__picture" />
        </div>
    )
}

export default ProductSource
