import React, {FC} from 'react'

interface Props {
    price:any,
    setPrice: any
}

const ProductPrice:FC<Props> = ({price, setPrice}) => {

    return (
        <div className="input-container">
            <label>Cena
                <input type="text" value={price.value} onChange={(e) => setPrice({value: e.target.value, setted: true})}/>
            </label>
        </div>
    )
}

export default ProductPrice
