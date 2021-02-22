import React, {FC, useEffect, useState} from 'react'

import {ICity} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    city: string,
    setCity: (city: string) => void,
    province: string
}

const City:FC<Props> = ({city, setCity, province}) => {
    const [cities, setCities]:any = useState<Array<ICity>>([])

    useEffect(() => {
        fetch(`/api/v1/cities?province_name=${province}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((cities_: Array<ICity>) => setCities(cities_))
    }, [province])

    return (
        <div className="input-container">
            <p>Miasto</p>
            
            <select value={city} onChange={(e) => setCity(e.target.value)} className="input-container__input" >
                {cities.map((city: ICity) => <option key={`key${city.name}`}>{city.name}</option>)}
            </select>
        </div>
    )
}

export default City
