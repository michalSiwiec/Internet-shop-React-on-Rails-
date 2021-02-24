import React, {FC} from 'react'

import MainMenuOption from './MainMenuOption/MainMenuOption'

interface Props{isInvisibility:boolean}

const MainMenuOptions:FC<Props> = ({isInvisibility}) => {
    return(
        <div className={`option-menu-container ${isInvisibility ? "invisible" : ""}`}>
            <ul className="list">
                <MainMenuOption value="Oferta" path="/home/Offer/" disabled={false}/> 
                <MainMenuOption value="Opinie uzytkowników" path="/home/Opinions/" disabled={false} />
                <MainMenuOption value="O nas" path="/home/AboutUs/"disabled={true} />
                <MainMenuOption value="Aplikacje klienckie" path="/home/ClientsApp/" disabled={true} /> 
            </ul>
        </div>
    )
}

export default MainMenuOptions