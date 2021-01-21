import React, {FC} from 'react'

interface Props {
    type: any,
    setType: any
}

const ProductType:FC<Props> = ({type, setType}) => {
    return (
        <div className="input-container">
            <label>Typ produktu
                <input type="text" value={type.value} onChange={(e) => setType({value: e.target.value, setted: true})}/>
            </label>
        </div>
    )
}

export default ProductType
