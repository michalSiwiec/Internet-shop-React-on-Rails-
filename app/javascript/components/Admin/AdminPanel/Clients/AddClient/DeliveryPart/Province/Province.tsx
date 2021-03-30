import React, {FC, useEffect, useState} from 'react'

import {IProvince, ICity} from '../../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    setProvince: (province: string) => void,
    setCity: (city: string) => void
}

const Province:FC<Props> = ({setProvince, setCity}) => {
    const [provinces, setProvinces] = useState<Array<IProvince>> ([])

    const changeCityAfterSelectProvince = (province: string) => {
        fetch(`/api/v1/provinces/show?name=${province}`, {method: 'GET'})
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
        <div className="input-container">
            <p>Województwo</p>
            
            <select className="input-container__input" onChange={
                (e) => {
                    setProvince(e.target.value)
                    changeCityAfterSelectProvince(e.target.value)
                }  
            }>
                {provinces.map(province => <option key={`province-${province.name}`}>{province.name}</option>)}
            </select>
        </div>
    )
}

export default Province
