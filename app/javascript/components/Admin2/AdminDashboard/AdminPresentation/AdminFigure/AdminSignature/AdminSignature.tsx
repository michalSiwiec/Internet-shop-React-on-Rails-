import React, {useEffect, useState} from 'react'

import {useSelector} from 'react-redux'

const AdminSignature = () => {
    const adminID = useSelector((state: any) => state.adminsReducer.admin.id)

    const [admin, setAdmin]:any = useState({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        login: '',
        password: ''
    })

    useEffect(() => {
        fetch(`/api/v1/admin/${adminID}`, {method: 'GET',})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(admin => setAdmin(admin))
    }, [])

    return(
        <figcaption>{`${admin.name} ${admin.surname}`}</figcaption>
    )
}

export default AdminSignature
