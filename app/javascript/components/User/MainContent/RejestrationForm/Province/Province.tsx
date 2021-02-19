import React, {FC, useEffect, useState} from 'react'

import {ICity, IProvince} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    setProvince: (province: string) => void,
    setCity: (city: string) => void,
}

const Province:FC<Props> = ({setProvince, setCity}) => {
    const [provinces, setProvinces] = useState<Array<IProvince>>([])

    const fetchProvinces = () => {
        fetch('/api/v1/provinces',{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((province_: Array<IProvince>) => setProvinces(province_))
    }

    const fetchFirstCity = (province: string) => {
        return new Promise((resolve, reject) => {
            fetch(`/api/v1/provinces/show?name=${province}`,{method: 'GET'})
            .then(response => {
                if(response.ok)
                    resolve(response.json())
                else
                    throw Error(response.statusText);
            })
        })
    }

    useEffect(() =>fetchProvinces(), [])

    return (
        <div>
            <select onChange={(e) => {
                setProvince(e.target.value)
                fetchFirstCity(e.target.value)
                .then((city: ICity) => setCity(city.name))
            }}>
                {provinces.map((province: IProvince) => <option key={`${province.id}`}>{province.name}</option>)}
            </select>
        </div>
    )
}

export default Province