import React, {useState} from 'react'

// import '../../../../../../assets/stylesheets/UserContent/MainContent/OrderArea/Advertisement/Advertisement.scss'

const Advertisement = () => {
    const Advertisement1 = require('../../../../../../assets/images/Advertisement.jpg')
    const Advertisement2 = require('../../../../../../assets/images/horizontalAdvertisement.png')

    const [path, setPath] = useState(Advertisement2)

    window.addEventListener('resize', () => {
        if(window.innerWidth >= 1024)
            setPath(Advertisement1)
        else 
            setPath(Advertisement2)
    })

    if(window.innerWidth > 1024 && path != Advertisement1)
        setPath(Advertisement1)

    return (
        <div className="advertisement-container">
            <img src={path} alt="Adavertisement" className="advertisement"/>
        </div>
    )
}

export default Advertisement
