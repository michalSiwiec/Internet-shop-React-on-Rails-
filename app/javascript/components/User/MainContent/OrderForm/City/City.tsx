import React, {FC, useState, useEffect} from 'react'

import {ICity} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    city: {value: string, unmutable: boolean},
    setCity: (city: {value: string, unmutable: boolean}) => void,
    province: string
}

const City:FC<Props> = ({city, setCity, province}) => {
    const [cities, setCities] = useState<Array<ICity>>([])

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
        <div className="data-container">
            <label> Miasto
                <select value={city.value} disabled={city.unmutable} onChange={(e) => setCity({value: e.target.value, unmutable: city.unmutable}) }>
                    {cities.map((city_: ICity) => <option key={`city${city_.name}`}>{city_.name}</option>)}
                </select>
            </label>
        </div>
    )
} 

export default City
