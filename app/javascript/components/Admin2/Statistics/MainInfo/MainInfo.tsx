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
        <div className="main-info-diagram-container">
            {mainInfos.map((mainInfo) => {
                return(
                    <div key={`mainInfoContainer ${mainInfo.label}`}>
                        <p>{mainInfo.label}</p>
                        <span>{mainInfo.property_value}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default MainInfo
