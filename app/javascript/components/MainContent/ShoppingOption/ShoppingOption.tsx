import React from 'react'

import Header from './Header'
import CommonShopping from './CommonShopping'
import Rejestration from './Rejestration'
import SingIn from './SingIn'

import '../../../../assets/stylesheets/ShoppingOptions.scss'

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
