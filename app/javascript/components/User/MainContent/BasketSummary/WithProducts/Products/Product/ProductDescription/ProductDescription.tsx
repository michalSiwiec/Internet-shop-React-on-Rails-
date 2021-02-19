import React, {FC} from 'react'

interface Props {description: string}

const ProductDesciription:FC<Props> = ({description}) => {
    return (
        <div className="description-container">
            <div>
                <h3>Opis produktu</h3>
            </div>

            <div>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default ProductDesciription
