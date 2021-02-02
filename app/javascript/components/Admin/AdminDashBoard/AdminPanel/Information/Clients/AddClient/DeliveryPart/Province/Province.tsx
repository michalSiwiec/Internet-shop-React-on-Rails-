import React, {FC, useEffect, useState} from 'react'

interface Props {
    setProvince: any,
    setCity: any
}

const Province:FC<Props> = ({setProvince, setCity}) => {
    const [provinces, setProvinces]:any = useState([])

    const changeCityAfterSelectProvince = (province: string) => {
        fetch(`/api/v1/provinces/show?name=${province}`, {method: 'GET'})
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
            
            <select onChange={
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
