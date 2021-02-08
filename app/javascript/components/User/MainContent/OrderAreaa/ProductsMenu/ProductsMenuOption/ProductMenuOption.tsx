import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'

interface Props {
    value: string
    path: string
    id:string
    setType(id:string):void
}

const ProductMenuOption: FC<Props> = ({value, path, setType,id}) => {
    return (
        <NavLink to={path} exact={true} className="menu-option-list__item" id={id} onClick={(e) => setType(id)}>{value}</NavLink>
    )
}

export default ProductMenuOption
