import React, {FC} from 'react'

interface Props{isInvisibility: boolean, setIsInvisibilty: (value: boolean) => void}

const MainMenuHamburger: FC<Props> = ({setIsInvisibilty, isInvisibility}) => {
    return(
        <div className="hamburger-menu-container">
            <i className="icon-menu hamburger-menu-container__hamburger" onClick={() => setIsInvisibilty(!isInvisibility)}></i>
        </div>
    )
}

export default MainMenuHamburger