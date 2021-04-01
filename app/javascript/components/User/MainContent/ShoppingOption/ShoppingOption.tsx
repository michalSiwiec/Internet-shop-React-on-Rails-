import React from 'react'

import Header from './Header/Header'
import CommonShopping from './CommonShopping/CommonShopping'
import Rejestration from './Rejestration/Rejestration'
import SingIn from './SingIn/SingIn'

const ShoppingOption = () => {
    return (
        <div className="shopping-options-container">
            <Header />
            <SingIn />
            <Rejestration />
            <CommonShopping /> 
        </div>
    )
}

export default ShoppingOption
