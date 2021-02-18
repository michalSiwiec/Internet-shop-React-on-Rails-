import React, {FC, useEffect, useState} from 'react'

import {IProvince, ICity} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    province: string,
    setProvince: (province: string) => void,
    setCity: (city: string) => void
}

const Province:FC<Props> = ({province, setProvince, setCity}) => {
    const [provinces, setProvinces] = useState<Array<IProvince>>([])

    const changeCityAfterSelectProvince = (provinceName: string) => {
        fetch(`/api/v1/provinces/show?name=${provinceName}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((city: ICity) => setCity(city.name))
    }


    useEffect(() => {
        fetch(`/api/v1/provinces`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((provinces_: Array<IProvince>) => setProvinces(provinces_))
    }, [])

    return (
        <div>
            <p>Województwo</p>
            
            <select value={province} onChange={(e) => {
                setProvince(e.target.value)
                changeCityAfterSelectProvince(e.target.value)
            }}>
                {provinces.map(province_ => <option key={`province${province_.name}`}>{province_.name}</option>)}
            </select>
        </div>
    )
}

export default Province
