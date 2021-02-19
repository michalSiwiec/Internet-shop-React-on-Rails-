import React from 'react'

import Ornament from './Ornament/Ornament'
import Invitation from './Invitation/Invitation'
import CommonShoppingButton from './CommonShoppingButton/CommonShoppingButton'

const CommonShopping = () =>  {
    return (
        <div className="shopping-without-rejestration-container">
            <Ornament />

            <div className="fileds-container">
                <Invitation />
                <CommonShoppingButton />
            </div>
        </div>
    )
}

export default CommonShopping
