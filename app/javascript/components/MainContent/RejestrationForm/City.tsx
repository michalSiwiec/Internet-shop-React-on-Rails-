import React, {FC, useEffect, useState} from 'react'

interface Props {
    setCity: any,
    selectedProvince: string,
}

const City:FC<Props> = ({setCity, selectedProvince}) => {
    const [cities, setCities] = useState([])

    const fetchCities = () => {
        fetch(`/api/v1/cities?province_name=${selectedProvince}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(data => setCities(data))
    }

    useEffect(() => fetchCities(), [selectedProvince])

    return (
        <div>
            <select onChange={(e) => setCity(e.target.value)} >
                {cities.map((city:any) => <option key={`city${city.id}`}>{city.name}</option>)}
            </select>
        </div>
    )
}

export default City