import React, {FC, useState, useEffect} from 'react'

interface Props {
    setCity: any,
    province: string
}

const City:FC<Props> = ({setCity, province}) => {
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
            
            <select onChange={(e) => setCity(e.target.value) }>
                {cities.map(city => <option key={`city${city.name}`}>{city.name}</option>)}
            </select>
        </div>
    )
}

export default City
