import React from 'react'

import PNG1 from 'images/PictureSlider1.jpg'

const AdvertisementSlider = () => {
    // const PNG1 = require('../../../../assets/images/PictureSlider1.jpg')

    return(
        <div className="advertisement-slider-container">
            <img src={PNG1} alt="Reklama1" className="picture" />
        </div>
    )
}

export default AdvertisementSlider