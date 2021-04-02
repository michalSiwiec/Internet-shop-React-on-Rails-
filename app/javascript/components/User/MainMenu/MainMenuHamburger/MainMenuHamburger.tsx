import React, {FC} from 'react'

interface Props{isInvisibility: boolean, setIsInvisibilty: (value: boolean) => void}

const MainMenuHamburger: FC<Props> = ({setIsInvisibilty, isInvisibility}) => {
    return(
        <div className="hamburger-menu-container" onClick={() => setIsInvisibilty(!isInvisibility)}>
            <i className="fas fa-bars hamburger-menu-container__hamburger"></i>
        </div>
    )
}

export default MainMenuHamburger