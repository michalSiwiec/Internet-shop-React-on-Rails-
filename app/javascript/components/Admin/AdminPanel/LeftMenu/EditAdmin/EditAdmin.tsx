import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import Header from './Header/Header'
import Surname from './Surname/Surname'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import Password from './Password/Password'
import Name from './Name/Name'
import Login from './Login/Login'
import Email from './Email/Email'
import Buttons from './Buttons/Buttons'

import '../../../../../../assets/stylesheets/AdminPanel/LeftMenu/EditAdmin/EditAdmin.scss'

const EditAdmin = () => {
    const {adminID} = useParams()
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const editAdmin = (e) => {
        console.log('edit admin')

        const newAdminData = {
            name,
            surname,
            email,
            phone_number: phoneNumber,
            login,
            password
        }

        fetch(`/api/v1/admin/editAdmin?adminID=${adminID}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                adminID,
                newAdminData
            })
        })
    }

    useEffect(() => {
        fetch(`/api/v1/admin/get_admin?adminID=${adminID}`, {method: 'GET',})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(admin => {
            setName(admin.name)
            setSurname(admin.surname)
            setEmail(admin.email)
            setPhoneNumber(admin.phone_number)
            setLogin(admin.login)
            setPassword(admin.password)
        })
    }, [])

    return (
        <div className="edit-admin-container">
            <div className="overlay"></div>
            
            <div className="edit-admin-form">
                <Header />
                <Name name={name} setName={setName} />
                <Surname surname={surname} setSurname={setSurname} />
                <Email email={email} setEmail={setEmail} />
                <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                <Login login={login} setLogin={setLogin} />
                <Password password={password} setPassword={setPassword} />
                <Buttons editAdmin={editAdmin} />
            </div>
        </div>
    )
}

export default EditAdmin
