import React from 'react';

import MainMenuOption from './MainMenuOption/MainMenuOption';
import MainMenuBrowser from './MainMenuBrowser/MainMenuBrowser';
import MainMenuBasket from './MainMenuBasket/MainMenuBasket';


const MainMenu = () => {
    return(
        <div className="main-menu-container">
            
        </div>
    //     <div className="row">
    //     <div className="col-12 mainMenuContainer p-0">
    //         <header>
    //             <nav className="navbar navbar-expand-md navbar-light">
    //                 <div className="row m-0">
                        
    //                     <div className="logoContainer col-2 p-0 p-2">
    //                         <MainMenuOption />
    //                     </div>
                        
    //                     <div className="col-8 d-md-none p-0 d-flex justify-content-end pr-3">
    //                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuOptions">
    //                             <span className="navbar-toggler-icon"></span>
    //                         </button>
    //                     </div>
                        
    //                     <div className="browserContainer col-12 col-md-8 d-flex justify-content-center order-4 order-md-2">
    //                         <MainMenuBrowser />
    //                     </div>

    //                     <div className="basketContainer col-2 m-0 p-0 order-md-3 text-center">
    //                         <MainMenuBasket />
    //                     </div>

    //                     <div className="linkContainer my-2 col-12 collapse navbar-collapse order-3" id="menuOptions">
    //                         <ul className="d-flex flex-column flex-md-row justify-content-md-around p-0 linkContainer__list">              
    //                             <MainMenuOption />
    //                             <MainMenuOption />
    //                             <MainMenuOption />
    //                             <MainMenuOption />
    //                         </ul>
    //                     </div>

    //                 </div>
    //             </nav>
    //         </header>
    //     </div>
    // </div>
    )
}

export default MainMenu