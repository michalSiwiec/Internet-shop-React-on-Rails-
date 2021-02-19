import React, {FC, useState, useEffect} from 'react'

import {IProvince, ICity} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    province: {value: string, unmutable: boolean},
    setProvince: (province: {value: string, unmutable: boolean}) => void,
    setCity: (city: {value: string, unmutable: boolean}) => void
}

const Province:FC<Props> = ({province, setProvince, setCity}) => {
    const [provinces, setProvinces] = useState<Array<IProvince>>([])

    const changeCityAfterSelectProvince = (provinceName, unmutable) => {
        fetch(`/api/v1/provinces/show?name=${provinceName}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((city: ICity) => setCity({value: city.name, unmutable: unmutable}))
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
        <div className="data-container">
            <select value={province.value} disabled={province.unmutable} onChange={(e) => {
                setProvince({value: e.target.value, unmutable: province.unmutable})
                changeCityAfterSelectProvince(e.target.value, province.unmutable)
            }}>
                {provinces.map((province: IProvince) => <option key={`province${province.name}`}>{province.name}</option>)}
            </select>
        </div>
    )
}

export default Province
