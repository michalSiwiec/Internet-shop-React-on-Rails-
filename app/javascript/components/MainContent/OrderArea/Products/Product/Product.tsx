import React, {FC, useState} from 'react'

interface Props {
    product: {
        id: number
        source: string
        description: string
        price: number
        key_word: string
    }
}

const Product:FC<Props> = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    
    const updateQuantity = (e:string) => {
        setQuantity(parseInt(e))
    }

    return (
        <div className="single-product-container">
            <div className="flex-container">
                <figure>
                    <img src={product.source} alt={`picture${product.id}`} className="product-picture"/>
                    <figcaption className="product-description">{product.description}</figcaption>
                </figure>
            </div>
            
            <div className="flex-container">
                <button className="add-to-basket-button">Do koszyka</button>
                <input type="number" className="select_quantity_product" onChange={(e) => updateQuantity(e.target.value)} placeholder="Ilossść" min="1" value={quantity}/>
            </div>
        </div>
    )
}

export default Product
