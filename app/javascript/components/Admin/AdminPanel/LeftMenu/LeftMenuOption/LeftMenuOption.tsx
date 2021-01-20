import React, {FC} from 'react'

interface Props{
    moveToElement: any,
    element: any,
    value: string
}

const LeftMenuOption:FC<Props> = ({moveToElement, element, value}) => {
    return (
        <div className="menu-option">
            <li onClick={() => moveToElement(element)}>{value}</li>
        </div>
    )
}

export default LeftMenuOption
