import React from 'react'

import ActorsContainer from './ActorsContainer'

// import MainMenu from './MainMenu/MainMenu';
// import MainContent from './MainContent/MainContent';
// import MainFooter from './MainFooter/MainFooter';


const App = () => {

    return(
        <div> 
            <div>
                <h2>Movies</h2>
                <ActorsContainer/>
            </div>
            {/* <MainMenu />
            <MainContent/>
            <MainFooter/> */}
        </div>
    )
}

export default App;