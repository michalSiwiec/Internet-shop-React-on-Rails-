import React from 'react'

import MainMenu from '../User/MainMenu/MainMenu';
import AdvertisementSlider from '../User/AdvertisementSlider/AdvertisementSlider'
import MainContent from '../User/MainContent/MainContent';
import MainFooter from '../User/MainFooter/MainFooter';

const User = () => {
    return (
        <>
            <MainMenu />
            <AdvertisementSlider />
            <MainContent />
            <MainFooter />
        </>
    )
}

export default User
