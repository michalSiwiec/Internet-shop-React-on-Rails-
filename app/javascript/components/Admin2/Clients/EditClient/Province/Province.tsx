import React, {FC, useEffect, useState} from 'react'

interface Props {
    province: string,
    setProvince: any,
    setCity: any
}

const Province:FC<Props> = ({province, setProvince, setCity}) => {
    const [provinces, setProvinces]:any = useState([])

    const changeCityAfterSelectProvince = (provinceName) => {
        fetch(`/api/v1/provinces/show?name=${provinceName}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(city => setCity(city.name))
    }

    useEffect(() => {
        fetch(`/api/v1/provinces`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(provinces_ => setProvinces(provinces_))
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
