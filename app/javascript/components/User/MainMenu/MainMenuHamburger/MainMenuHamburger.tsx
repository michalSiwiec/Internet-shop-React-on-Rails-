import React, {FC} from 'react'

interface Props{
    isInvisibility: boolean
    setIsInvisibilty: (value: boolean) => void
}

const MainMenuHamburger: FC<Props> = ({setIsInvisibilty, isInvisibility}) => {
    return(
        <div className="hamburger-menu-container">
            <button onClick={() => setIsInvisibilty(!isInvisibility)}>Hamburger</button>
        </div>
    )
}

export default MainMenuHamburger