import React, {FC, useEffect, useState} from 'react'

interface Props {
    city: string,
    setCity: any,
    province: string
}

const City:FC<Props> = ({city, setCity, province}) => {
    const [cities, setCities]:any = useState([])

    useEffect(() => {
        fetch(`/api/v1/cities?province_name=${province}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(cities_ => setCities(cities_))
    }, [province])

    return (
        <div>
            <p>Miasto</p>
            
            <select value={city} onChange={(e) => setCity(e.target.value)} >
                {cities.map(city => <option key={`key${city.name}`}>{city.name}</option>)}
            </select>
        </div>
    )
}

export default City
