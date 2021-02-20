import React, {useEffect, useState} from 'react'

import {IReduxState, IAdmin} from '../../../../../../../../../TypeScript/Interfaces/Interfaces'

import {useSelector} from 'react-redux'

const AdminSignature = () => {
    const adminID: number = useSelector((state: IReduxState) => state.adminsReducer.admin.id)

    const [admin, setAdmin] = useState<IAdmin>({
        name: '',
        surname: '',
        email: '',
        phone_number: '',
        login: '',
        password: ''
    })

    useEffect(() => {
        // fetch(`/api/v1/admin/${adminID}`, {method: 'GET',})
        fetch(`/api/v1/admin/${1}`, {method: 'GET',})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((admin: IAdmin) => setAdmin(admin))
    }, [])

    return(
        <figcaption className="figure__figcaption">{`${admin.name} ${admin.surname}`}</figcaption>
    )
}

export default AdminSignature
