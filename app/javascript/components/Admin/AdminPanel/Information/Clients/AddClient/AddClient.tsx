import React, {useState} from 'react'

import Header from './Header/Header'

import City from './DeliveryPart/City/City'
import Country from './DeliveryPart/Country/Country'
import HouseNumber from './DeliveryPart/HouseNumber/HouseNumber'
import PostalCode from './DeliveryPart/PostalCode/PostalCode'
import Province from './DeliveryPart/Province/Province'
import Street from './DeliveryPart/Street/Street'

import Login from './LogInPart/Login/Login'
import Password from './LogInPart/Password/Password'
import PasswordConfirmation from './LogInPart/PasswordConfirmation/PasswordConfirmation'

import Name from './PersonalPart/Name/Name'
import Surname from './PersonalPart/Surname/Surname'
import Email from './PersonalPart/Email/Email'
import PhoneNumber from './PersonalPart/PhoneNumber/PhoneNumber'
import Buttons from './Buttons/Buttons'

import '../../../../../../../assets/stylesheets/AddClient.scss'

const AddClient = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [login, setlogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [country, setCountry] = useState('Polska')
    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [postalCode, setPostalCode] = useState('44 - 119')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')

    const addUser = () => {
        const formData = {
            login,
            password,
            name,
            surname,
            phone_number: phoneNumber,
            email,
            street,
            province,
            city,
            house_number: houseNumber,
            postal_code: postalCode,
            country
        }

        fetch("/api/v1/users/addUser", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    // console.log(province, city, postalCode)

    return (
        <div className="add-client-container">
            <div className="overlay"></div>

            <div className="form-container">
                <form>
                    <Header />

                    <div className="personal-part-container">
                        <Name name={name} setName={setName} />
                        <Surname surname={surname} setSurname={setSurname} />
                        <Email email={email} setEmail={setEmail} />
                        <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                    </div>

                    <div className="log-in-container">
                        <Login login={login} setLogin={setlogin} />
                        <Password password={password} setPassword={setPassword} />
                        <PasswordConfirmation passwordConfirmation={passwordConfirmation} setPasswordConfirmation={setPasswordConfirmation} />
                    </div>

                    <div className="delivery-address-container">
                        <Country country={country} setCountry={setCountry} />
                        <Province setProvince={setProvince} setCity={setCity} />
                        <City setCity={setCity} province={province}/>
                        <PostalCode postalCode={postalCode} setPostalCode={setPostalCode} city={city}/>
                        <Street street={street} setStreet={setStreet} />
                        <HouseNumber houseNumber={houseNumber} setHouseNumber={setHouseNumber} />
                    </div>

                    <Buttons addUser={addUser} />
                </form>
            </div>
        </div>
    )
}

export default AddClient
