import React, {useState} from 'react'

import FormHeader from './FormHeader'
import Login from './Login'
import Password from './Password'
import PasswordConfirmation from './PasswordConfirmation'
import Name from './Name'
import Surname from './Surname'
import Email from './EmailAddress'
import PhoneNumber from './PhoneNumber'
import Country from './Country'
import Street from './Street'
import HouseNumber from './HouseNumber'
import RejestrationButton from './RejestrationButton'
import Province from './Province'
import City from './City'
import PostalCode from './PostalCode'

import '../../../../assets/stylesheets/RejestrationForm.scss'

const RejestrationForm = () => {
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
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [name, setName]:Array<any> = useState({
        value: '',
        mistakeInformation: []
    })
    const [surname, setSurname]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [phoneNumber, setPhoneNumber]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [email, setEmail]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [street, setStreet]:Array<any>  = useState({
        value: '', 
        setted: false,
        mistakeInformation: []
    })

    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [houseNumber, setHouseNumber] = useState('1')
    const [postalCode, setPostalCode] = useState('44 - 119')


    const registerUser = () => {
        const formData = {
            login: login.value,
            password: password.value,
            name: name.value,
            surname: surname.value,
            phone_number: phoneNumber.value,
            email: email.value,
            street: street.value,
            province: province,
            city: city,
            house_number: houseNumber,
            postal_code: postalCode,
            country: 'Polska'
        }

        console.log(formData)

        fetch("/api/v1/addUser", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        // .then(response => {
        //     if(response.ok)
        //         return response.json()
        //     else
        //         throw Error(response.statusText);
        // })
    }

    const checkDataForm = (e:any) => {
        const fields = [login, password, passwordConfirmation, name, surname, phoneNumber, street, email]
        let allFieldsSetted = true

        fields.forEach(field => {
            if(!field.setted)
                allFieldsSetted = false
        })

        e.preventDefault()

        if(allFieldsSetted)
            registerUser()
        else 
            alert('Proszę wypełnić wszystkie pola!')
    }

    return (
        <div className="rejestration-form-container">
            <form>
                <FormHeader />

                <div className="fields-container">
                    <Login login={login} setLogin={setLogin}/>
                    <Password password={password} setPassword={setPassword}/>
                    <PasswordConfirmation passwordConfirmation={passwordConfirmation} password={password} setPasswordConfirmation={setPasswordConfirmation} />
                </div>

                <div className="fields-container">
                    <Name name={name} setName={setName}/>
                    <Surname surname={surname} setSurname={setSurname}/>
                    <Email email={email} setEmail={setEmail}/>
                    <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                </div>

                <div className="fields-container">
                    <Country />
                    <Province setProvince={setProvince} setCity={setCity} />
                    <City setCity={setCity} selectedProvince={province} />
                    <PostalCode city={city} setPostalCode={setPostalCode} postalCode={postalCode}/>
                    <Street street={street} setStreet={setStreet}/>
                    <HouseNumber houseNumber={houseNumber} setHouseNumber={setHouseNumber}/>
                </div>

                <RejestrationButton checkDataForm={checkDataForm}/>
            </form>
        </div>
    )
}

export default RejestrationForm
