import React, {FC, useEffect, useState} from 'react'

import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

import '../../../../../../assets/stylesheets/AdminPanel/LeftMenu/AdminPresentation/AdminPresentation.scss'

interface Props {

}

const AdminPresentation:FC<Props> = () => {
    const logo =  require("../../../../../../assets/images/adminPicture.png")
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
        // fetch(`/api/v1/admin/get_admin?adminID=${adminID}`, {method: 'GET',})
        fetch(`/api/v1/admin/get_admin?adminID=1`, {method: 'GET',})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(admin => setAdmin(admin))
    }, [])

    return (
        <div className="admin-presentation-container">
            <p>Zalogowany jako</p>

            <figure>
                <Link to={`/admin/editAdmin/${adminID}`}>
                    <img src={logo} alt="" />
                </Link>

                <img src={`../../../../../../assets/images/adminPicture.png`} alt="" />
                    <figcaption>{`${admin.name} ${admin.surname}`}</figcaption>
            </figure>
        </div>
    )
}

export default AdminPresentation
