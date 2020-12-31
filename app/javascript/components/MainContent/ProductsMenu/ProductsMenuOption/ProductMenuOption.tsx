import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'

interface Props {
    value: string
    path: string
}

const ProductMenuOption: FC<Props> = ({value, path}) => {
    return (
        <NavLink to={path} className="menu-option-list__item">{value}</NavLink>
    )
}

export default ProductMenuOption
