import React from 'react'

const Logo = require('../../../../assets/images/Kaufland_Logo.png')


const MainMenuLogo = () => {
    return (
        <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo-container__logo"/>
        </div>
    )
}

export default MainMenuLogo