import React, {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import '../../../../../../../assets/stylesheets/EditClient.scss'

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
import Buttons from './Buttons/Buttons'

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
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [houseNumber, setHouseNumber] = useState('1')
    
    const editUser = () => {
        const newClientData  = {
            name,
            surname,
            email,
            phoneNumber,
            country,
            province,
            city,
            postalCode,
            street,
            houseNumber,
            login,
            password
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
                value: user.personal_data[0].name,
                setted: true,
                mistakeInformation: []
            })
            setSurname({
                value: user.personal_data[0].surname,
                setted: true,
                mistakeInformation: []
            })
            setEmail({
                value: user.personal_data[0].email,
                setted: true,
                mistakeInformation: []
            })
            setPhoneNumber({
                value: user.personal_data[0].phone_number,
                setted: true,
                mistakeInformation: []
            })
            setLogin({
                value: user.data_logins[0].login,
                setted: true,
                mistakeInformation: []
            })
            setPassword({
                value: user.data_logins[0].password,
                setted: true,
                mistakeInformation: []
            })
            setStreet({
                value: user.delivery_addresses[0].street,
                setted: true,
                mistakeInformation: []
            })
            setCountry(user.delivery_addresses[0].country)
            setProvince(user.delivery_addresses[0].province)
            setCity(user.delivery_addresses[0].city)
            setPostalCode(user.delivery_addresses[0].postal_code)
            setHouseNumber(user.delivery_addresses[0].house_number)
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
                    <Country country={country} setCountry={setCountry}/>
                    <Province province={province} setProvince={setProvince} />
                    <City city={city} setCity={setCity} />
                    <PostalCode postalCode={postalCode} setPostalCode={setPostalCode} />
                    <Street street={street} setStreet={setStreet} />
                    <HouseNumber houseNumber={houseNumber} setHouseNumber={setHouseNumber} />
                    <Header value="Dane logowania" />
                    <Login login={login} setLogin ={setLogin} />
                    <Password password={password} setPassword={setPassword} />
                    <Buttons editUser={editUser} />
                </form>
            </div>
        </div>
    )
}

export default EditClient
