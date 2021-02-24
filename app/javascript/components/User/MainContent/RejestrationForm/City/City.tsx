import React, {FC, useEffect, useState} from 'react'

import {ICity} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {setCity: (city: string) => void, selectedProvince: string,}

const City:FC<Props> = ({setCity, selectedProvince}) => {
    const [cities, setCities] = useState<Array<ICity>>([])

    const fetchCities = () => {
        fetch(`/api/v1/cities?province_name=${selectedProvince}`,{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((cities_: Array<ICity>) => setCities(cities_))
    }

    useEffect(() => fetchCities(), [selectedProvince])

    return (
        <div>
            <p className="label-container__label">Miasto</p>

            <select onChange={(e) => setCity(e.target.value)} >
                {cities.map((city: ICity) => <option key={`city${city.id}`}>{city.name}</option>)}
            </select>
        </div>
    )
}

export default City