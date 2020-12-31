import React, {FC,useState} from 'react'

import MainMenuOption from './MainMenuOption/MainMenuOption'


interface Props{
    isInvisibility:boolean
}

const MainMenuOptions:FC<Props> = ({isInvisibility}) => {
    return(
        <div className={`option-menu-container ${isInvisibility ? "invisible" : ""}`}>
            <ul className="list">
                <MainMenuOption value="Oferta" path="/Offer"/> 
                <MainMenuOption value="Gazeta reklamowa" path="/Newspaper"/>
                <MainMenuOption value="Przepisy" path="/Recipies"/>
                <MainMenuOption value="Aplikacje klienckie" path="/ClientsApp"/> 
            </ul>
        </div>
    )
}

export default MainMenuOptions