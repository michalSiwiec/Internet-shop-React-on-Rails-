import React from 'react'

import {Link} from 'react-router-dom';

// import Logo from '../../../../../assets/images/Kaufland_Logo.png'

const MainMenuLogo = () => {
    const Logo = require('../../../../../assets/images/Kaufland_Logo.png')

    return (
        <div className="logo-container">
            <Link to="/home">
                <img src={Logo} alt="Logo" className="logo-container__logo"/>
            </Link>
        </div>
    )
}

export default MainMenuLogo