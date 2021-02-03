import React, {FC} from 'react'

interface Props {
    value: string
}

const Header:FC<Props> = ({value}) => {
    return (
        <div className="header-container">
            <h3>{value}</h3>
        </div>
    )
}

export default Header
