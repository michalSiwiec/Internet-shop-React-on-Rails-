import React, {useState} from 'react'

import {checkDataForm} from '../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../TypeScript/Interfaces/Interfaces'

import FormHeader from './Header/FormHeader'
import Login from './Login/Login'
import Password from './Password/Password'
import PasswordConfirmation from './PasswordConfirmation/PasswordConfirmation'
import Name from './Name/Name'
import Surname from './Surname/Surname'
import Email from './EmailAddress/EmailAddress'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import Country from './Country/Country'
import Street from './Street/Street'
import HouseNumber from './HouseNumber/HouseNumber'
// import RejestrationButton from './RejestrationButton/RejestrationButton'
import Province from './Province/Province'
import City from './City/City'
import PostalCode from './PostalCode/PostalCode'
import Buttons from './Buttons/Buttons'

import {useDispatch} from 'react-redux'
import actions from '../../../../../redux/user/duck/actions'

const RejestrationForm = () => {
    const dispatch = useDispatch()

    const [login, setLogin] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [password, setPassword] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [passwordConfirmation, setPasswordConfirmation] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [name, setName] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [surname, setSurname] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [phoneNumber, setPhoneNumber] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [email, setEmail] = useState<IFieldForm>({
        value: '',
        setted: false,
        mistakeInformation: ['']
    })
    const [street, setStreet] = useState<IFieldForm>({
        value: '', 
        setted: false,
        mistakeInformation: ['']
    })

    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [houseNumber, setHouseNumber] = useState('1')
    const [postalCode, setPostalCode] = useState('44 - 119')

    const registerUser = (e: React.SyntheticEvent) => {
        const dataToCheck = [
            login.setted,
            password.setted,
            surname.setted,
            phoneNumber.setted,
            email.setted,
            street.setted,
        ]

        if(checkDataForm(dataToCheck)){
            const formData = {
                dataLogin: {
                    login: login.value,
                    password: password.value,
                },
                dataPerson: {
                    name: name.value,
                    surname: surname.value,
                    phone_number: phoneNumber.value,
                    email: email.value,
                },
                deliveryAddress: {
                    street: street.value,
                    province: province,
                    city: city,
                    house_number: houseNumber,
                    postal_code: postalCode,
                    country: 'Polska'
                }
            }

            fetch("/api/v1/user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(() => {
                fetch(`/api/v1/user/get_last_user`, {method: 'GET'})
                .then(response => {
                    if(response.ok)
                        return response.json()
                    else
                        throw Error(response.statusText);
                })
                .then((user: {user_id: number}) => dispatch(actions.singInUser(user.user_id)))
            })
        } else
            e.preventDefault()     
    }

    return (
        <div className="rejestration-form-container">
            <form>
                <FormHeader />

                <div className="fields-container">
                    <Login login={login} setLogin={setLogin} />
                    <Password password={password} setPassword={setPassword}/>
                    <PasswordConfirmation passwordConfirmation={passwordConfirmation} password={password.value} setPasswordConfirmation={setPasswordConfirmation} />
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

                <Buttons registerUser={registerUser} />
            </form>
        </div>
    )
}

export default RejestrationForm
