import React, {FC} from 'react'

import MainMenuOption from './MainMenuOption/MainMenuOption'

interface Props{
    isInvisibility:boolean
}

const MainMenuOptions:FC<Props> = ({isInvisibility}) => {
    return(
        <div className={`option-menu-container ${isInvisibility ? "invisible" : ""}`}>
            <ul className="list">
                <MainMenuOption value="Oferta" path="/home/Offer/"/> 
                <MainMenuOption value="Gazeta reklamowa" path="/home/Newspaper/"/>
                <MainMenuOption value="Przepisy" path="/home/Recipies/"/>
                <MainMenuOption value="Aplikacje klienckie" path="/home/ClientsApp/"/> 
            </ul>
        </div>
    )
}

export default MainMenuOptions