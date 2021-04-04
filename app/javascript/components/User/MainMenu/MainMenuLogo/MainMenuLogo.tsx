import React from 'react'

import {Link} from 'react-router-dom';

import Logo from 'images/Kaufland_Logo.png'

const MainMenuLogo = () => {
    return (
        <div className="logo-container">
            <Link to="/">
                <img src={Logo} alt="Logo" className="logo-container__logo"/>
            </Link>
        </div>
    )
}

export default MainMenuLogo