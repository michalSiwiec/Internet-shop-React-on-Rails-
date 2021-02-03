import React, {FC, useState, useEffect} from 'react'

interface Props {
    province: {
        value: string,
        unmutable: boolean
    },
    setProvince: any,
    setCity: any
}

const Province:FC<Props> = ({province, setProvince, setCity}) => {
    const [provinces, setProvinces] = useState([])

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
        <div className="data-container">
            <select value={province.value} disabled={province.unmutable} onChange={(e) => {
                setProvince(e.target.value)
                changeCityAfterSelectProvince(e.target.value)
            }}>
                {provinces.map((province: any) => <option key={`province${province.name}`}>{province.name}</option>)}
            </select>
        </div>
    )
}

export default Province
