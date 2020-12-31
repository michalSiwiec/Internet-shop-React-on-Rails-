import React from 'react'

import MainMenu from './MainMenu/MainMenu';
import AdvertisementSlider from './AdvertisementSlider/AdvertisementSlider'
import MainContent from './MainContent/MainContent';
import MainFooter from './MainFooter/MainFooter';


const App = () => {

    return(
        <div> 
            <MainMenu />
            <AdvertisementSlider />
            <MainContent />
            {/* <MainFooter/> */}
        </div>
    )
}

export default App;