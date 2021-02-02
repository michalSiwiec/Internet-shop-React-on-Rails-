import React, {useEffect, useState} from 'react'

import {useSelector} from 'react-redux'

import Header from './Header/Header'
import Surname from './Surname/Surname'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import Password from './Password/Password'
import Name from './Name/Name'
import Login from './Login/Login'
import Email from './Email/Email'
import Buttons from './Buttons/Buttons'

import {checkDataForm} from '../../../../../Helpers/Admins/Admins'

import '../../../../../../assets/stylesheets/AdminPanel/LeftMenu/EditAdmin/EditAdmin.scss'

const EditAdmin = () => {
    const adminID = useSelector((state: any) => state.adminsReducer.admin.id)

    const [name, setName] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [surname, setSurname] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [email, setEmail] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [phoneNumber, setPhoneNumber] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [login, setLogin] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [password, setPassword] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })

    const editAdmin = (e) => {
        const dataToCheck = [
            name.setted,
            surname.setted,
            email.setted,
            phoneNumber.setted,
            login.setted,
            password.setted
        ]

        if(checkDataForm(dataToCheck)){
            const newAdminData = {
                name: name.value,
                surname: surname.value,
                email: email.value,
                phone_number: phoneNumber.value,
                login: login.value,
                password: password.value
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
        } else
            e.preventDefault() 
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
            setName({
                value: admin.name,
                setted: true,
                mistakeInformation: []
            })
            setSurname({
                value: admin.surname,
                setted: true,
                mistakeInformation: []
            })
            setEmail({
                value: admin.email,
                setted: true,
                mistakeInformation: []
            })
            setPhoneNumber({
                value: admin.phone_number,
                setted: true,
                mistakeInformation: []
            })
            setLogin({
                value: admin.login,
                setted: true,
                mistakeInformation: []
            })
            setPassword({
                value: admin.password,
                setted: true,
                mistakeInformation: []
            })
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
