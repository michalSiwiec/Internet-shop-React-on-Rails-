import React, {useState} from 'react'

import MainMenuLogo from './MainMenuLogo/MainMenuLogo'
import MainMenuOptions from './MainMenuOptions/MainMenuOptions'
import LogInWindow from './LoginWindow/LoginWindow'
import MainMenuBasket from './MainMenuBasket/MainMenuBasket'
import MainMenuHamburger from './MainMenuHamburger/MainMenuHamburger'


const MainMenu = () => {

    const [isInvisibility, setIsInvisibilty] = useState(true)

    window.addEventListener('resize', () => {
        if(window.innerWidth > 768 && isInvisibility)
            setIsInvisibilty(false)
    })

    if(window.innerWidth > 768 && isInvisibility)
        setIsInvisibilty(false)

    return(
        <div className="main-menu-container">
            <MainMenuLogo />
            <MainMenuHamburger isInvisibility={isInvisibility} setIsInvisibilty={setIsInvisibilty}/>
            <MainMenuBasket />
            <LogInWindow />
            <MainMenuOptions isInvisibility={isInvisibility} />
        </div>
    )
}

export default MainMenu