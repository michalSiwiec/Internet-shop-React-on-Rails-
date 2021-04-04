import React, {FC} from 'react'

import MainMenuOption from './MainMenuOption/MainMenuOption'

interface Props{isInvisibility:boolean}

const MainMenuOptions:FC<Props> = ({isInvisibility}) => {
    return(
        <div className={`option-menu-container ${isInvisibility ? "invisible" : ""}`}>
            <ul className="list">
                <MainMenuOption value="Oferta" path="/" disabled={false} /> 
                <MainMenuOption value="Opinie uzytkowników" path="/Opinions" disabled={false} />
                <MainMenuOption value="O nas" path="/AboutUs"disabled={true} />
                <MainMenuOption value="Aplikacje klienckie" path="/ClientsApp" disabled={true} /> 
            </ul>
        </div>
    )
}

export default MainMenuOptions