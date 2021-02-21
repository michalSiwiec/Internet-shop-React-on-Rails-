import React, {useState, useEffect} from 'react'

import {IMainInfo} from '../../../../../TypeScript/Interfaces/Interfaces'

const MainInfo = () => {
    const [mainInfos, setMainInfos] = useState<Array<IMainInfo>>([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_general_information", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then((mainInfos_: Array<IMainInfo>)=> setMainInfos(mainInfos_))
    }, [])

    return (
        <div className="presentation-data-container">
            {mainInfos.map((mainInfo) => {
                return(
                    <div className="main-info-container" key={`mainInfoContainer ${mainInfo.label}`}>
                        <p className="main-info-container__info-p">
                            {mainInfo.label}
                            <span className="main-info-container__info-span">{mainInfo.property_value}</span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default MainInfo
