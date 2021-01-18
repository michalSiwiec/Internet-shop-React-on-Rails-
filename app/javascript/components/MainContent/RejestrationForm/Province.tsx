import React, {FC, useEffect, useState} from 'react'

interface Props {
    setProvince: any,
    setCity: any,
}

const Province:FC<Props> = ({setProvince, setCity}) => {
    const [provinces, setProvinces] = useState([])

    const fetchProvinces = () => {
        fetch('/api/v1/provinces',{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(data => setProvinces(data))
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
                .then((data:any) => setCity(data.name))
            }}>
                {provinces.map((province:any) => <option key={`${province.id}`}>{province.name}</option>)}
            </select>
        </div>
    )
}

export default Province