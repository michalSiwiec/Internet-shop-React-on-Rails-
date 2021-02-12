import React, {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {checkDataForm} from '../../../../Helpers/Users/Users'

import Header from './Header/Header'
import Name from './Name/Name'
import Surname from './Surname/Surname'
import Email from './Email/Email'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import Country from './Country/Country'
import Province from './Province/Province'
import City from './City/City'
import PostalCode from './PostalCode/PostalCode'
import Street from './Street/Street'
import HouseNumber from './HouseNumber/HouseNumber'
import Login from './Login/Login'
import Password from './Password/Password'
import PasswordConfirmation from './PasswordConfirmation/PasswordConfirmation'
import Buttons from './Buttons/Buttons'

import {useHistory} from 'react-router-dom'

const EditClient = () => {
    const {userID} = useParams()
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
    const [street, setStreet] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [login, setLogin] = useState({
        value: '',
        setted: true,
        mistakeInformation: []
    })
    const [password, setPassword] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [postalCode, setPostalCode] = useState('44 - 119')
    const [houseNumber, setHouseNumber] = useState('1')

    const history = useHistory()
    
    const editUser = (e: any) => {
        e.preventDefault()

        const dataToCheck = [
            name.setted,
            surname.setted,
            email.setted,
            phoneNumber.setted,
            street.setted,
            login.setted,
            password.setted,
            passwordConfirmation.setted
        ]

        if(checkDataForm(dataToCheck)){
            const newClientData  = {
                name: name.value,
                surname: surname.value,
                email: email.value,
                phoneNumber: phoneNumber.value,
                country: "Polska",
                province,
                city,
                postalCode,
                street: street.value,
                houseNumber,
                login: login.value,
                password: password.value
            }

            fetch(`/api/v1/users/edit_user`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userID,
                    newClientData
                })
            })
            .then(() => history.push('/admin/Users'))
        }
    }

    useEffect(() => {
        fetch(`/api/v1/users/get_user?userID=${userID}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(user => {
            setName({
                value: user.personal_data.name,
                setted: true,
                mistakeInformation: []
            })
            setSurname({
                value: user.personal_data.surname,
                setted: true,
                mistakeInformation: []
            })
            setEmail({
                value: user.personal_data.email,
                setted: true,
                mistakeInformation: []
            })
            setPhoneNumber({
                value: user.personal_data.phone_number,
                setted: true,
                mistakeInformation: []
            })
            setLogin({
                value: user.data_logins.login,
                setted: true,
                mistakeInformation: []
            })
            setPassword({
                value: user.data_logins.password,
                setted: true,
                mistakeInformation: []
            })
            setStreet({
                value: user.delivery_addresses.street,
                setted: true,
                mistakeInformation: []
            })
            setProvince(user.delivery_addresses.province)
            setCity(user.delivery_addresses.city)
            setPostalCode(user.delivery_addresses.postal_code)
            setHouseNumber(user.delivery_addresses.house_number)
        })
    }, [])

    return (
        <div className="edit-user-container">
            <div className="overlay"></div>

            <div className="edit-user-form">
                <form>
                    <Header value="Dane osobowe" />
                    <Name name={name} setName={setName} />
                    <Surname surname={surname} setSurname={setSurname} />
                    <Email email={email} setEmail={setEmail} />
                    <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                    <Header value="Dane dostawcze" />
                    <Country />
                    <Province province={province} setProvince={setProvince} setCity={setCity} />
                    <City city={city} setCity={setCity} province={province} />
                    <PostalCode postalCode={postalCode} setPostalCode={setPostalCode} city={city} />
                    <Street street={street} setStreet={setStreet} />
                    <HouseNumber houseNumber={houseNumber} setHouseNumber={setHouseNumber} />
                    <Header value="Dane logowania" />
                    <Login login={login} setLogin ={setLogin} />
                    <Password password={password} setPassword={setPassword} />
                    <PasswordConfirmation passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} password={password.value} />
                    <Buttons editUser={editUser} />
                </form>
            </div>
        </div>
    )
}

export default EditClient
