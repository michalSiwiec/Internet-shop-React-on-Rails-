import React, {FC} from 'react'

import {useSelector} from 'react-redux'
import productsReducer from '../../../../../../../redux/products/duck/reducer'

import {IReduxState} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    value: string,
    id:string,
    setType(id:string):void,
    type: string
}

const ProductMenuOption: FC<Props> = ({value, setType,id, type}) => {
    const productType = useSelector((state: IReduxState) => state.productsReducer.productType)

    return (
        <div className="item-container">
            <li id={id} onClick={() => setType(id)} className="item-container__item">
                <span className={`${type === productType ? " active" : ""}`}>{value}</span>
            </li>
        </div>
    )
}

export default ProductMenuOption
