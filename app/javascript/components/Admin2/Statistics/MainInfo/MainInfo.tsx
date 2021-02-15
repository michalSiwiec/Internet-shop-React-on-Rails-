import React, {useState, useEffect} from 'react'

const MainInfo = () => {
    const [mainInfos, setMainInfos] = useState([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_general_information", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(mainInfos_ => setMainInfos(mainInfos_))
    }, [])

    return (
        <div className="main-info-diagram-container">
            {mainInfos.map((mainInfo: any) => {
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
