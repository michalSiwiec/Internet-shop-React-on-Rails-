import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import actions from '../../../../../redux/basket/duck/actions'

import Header from './Header/Header'
import City from './City/City'
import Email from './Email/Email'
import HouseNumber from './HouseNumber/HouseNumber'
import Name from './Name/Name'
import PhoneNumber from './PhoneNumber/PhoneNumber'
import PostalCode from './PostalCode/PostalCode'
import Province from './Province/Province'
import Street from './Street/Street'
import Surname from './Surname/Surname'
import AddOrderButton from './Buttons/AddOrderButton/AddOrderButton'
import CancelButton from './Buttons/CancelButton/CancelButton'

import {checkDataForm} from '../../../../Helpers/Orders/Orders'

const OrderForm = () => {
    const userID = useSelector((state: any) => state.userReducer.user.userID)
    const productsFromBasket = useSelector((state: any) => state.basketReducer.products)
    const wholeOrderPrice = useSelector((state: any) => state.basketReducer.wholePrice)

    const dispatch = useDispatch()

    // const [partsVisibilities, setPartsVisibilities] = useState(['', 'invisible', 'invisible'])
    const [partsVisibilities, setPartsVisibilities] = useState(['', '', ''])

    const [email, setEmail] = useState({
        value: '',
        setted: false,
        mistakeInformation: [],
        unmutable: false
    })
    const [phoneNumber, setPhoneNumber] = useState({
        value: '',
        setted: false,
        mistakeInformation: [],
        unmutable: false
    })
    const [name, setName] = useState({
        value: '',
        setted: false,
        mistakeInformation: [],
        unmutable: false
    })
    const [surname, setSurname] = useState({
        value: '',
        setted: false,
        mistakeInformation: [],
        unmutable: false
    })
    const [street, setStreet] = useState({
        value: '',
        setted: false,
        mistakeInformation: [],
        unmutable: false
    })
    const [province, setProvince] = useState({
        value: "Śląskie",
        unmutable: false
    })
    const [city, setCity] = useState({
        value: "Gliwice",
        unmutable: false
    })
    const [houseNumber, setHouseNumber] = useState({
        value: 1,
        unmutable: false
    })
    const [postalCode, setPostalCode] = useState("44 - 119")

    const addOrder = () => {
        const dataToCheck = [
            email.value,
            phoneNumber.value,
            name.value,
            surname.value,
            street.value
        ]

        if(checkDataForm(dataToCheck)){
            let orderData

            if(userID !== 0){
                orderData = {
                    userID,
                    productsFromBasket,
                    wholeOrderPrice
                }
            } else {
                orderData = {
                    deliveryAddress: {
                        country: 'Polska',
                        province: province.value,
                        city: city.value,
                        postal_code: postalCode,
                        street: street.value,
                        house_number: houseNumber.value,
                    },
                    dataPerson:{
                        name: name.value,
                        surname: surname.value,
                        email: email.value,
                        phone_number: phoneNumber.value,
                    },
                    userID,
                    productsFromBasket,
                    wholeOrderPrice
                } 
            }

            fetch("/api/v1/orders/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            })
            .then(() => dispatch(actions.resetBasket()))
        } else
            alert('Prosze wypelnic wszystkie pola!')
    }

    useEffect(() => {
        if(userID !== 0){
            fetch(`/api/v1/user/${userID}`, {method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then(user => {
                setEmail({
                    value: user.personalData.email,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setPhoneNumber({
                    value: user.personalData.phone_number,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setName({
                    value: user.personalData.name,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setSurname({
                    value: user.personalData.surname,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setStreet({
                    value: user.deliveryAddresses.street,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setProvince({
                    value: user.deliveryAddresses.province,
                    unmutable: true
                })
                setCity({
                    value: user.deliveryAddresses.city,
                    unmutable: true
                })
                setHouseNumber({
                    value: user.deliveryAddresses.house_number,
                    unmutable: true
                })
                setPostalCode(user.deliveryAddresses.postal_code)
            })
        }
    }, [userID])
    
    return (
        <div className="order-form-container">
            <div className={`part-container ${partsVisibilities[0]}`}>
                <Header value="Dane kontaktowe" />
                <Email email={email} setEmail={setEmail} />
                <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
            </div>

            <div className={`part-container ${partsVisibilities[1]}`}>
                <Header value="Dane osobowe" />
                <Name name={name} setName={setName} />
                <Surname surname={surname} setSurname={setSurname} />
            </div>

            <div className={`part-container ${partsVisibilities[2]}`}>
                <Header value="Dane dostawcze" />
                <Province province={province} setProvince={setProvince} setCity={setCity} />
                <City city={city} setCity={setCity} province={province.value} />
                <PostalCode postalCode={postalCode} setPostalCode={setPostalCode} city={city.value} />
                <Street street={street} setStreet={setStreet} />
                <HouseNumber houseNumber={houseNumber} setHouseNumber={setHouseNumber} />
            </div>

            <AddOrderButton addOrder={addOrder} />
            <CancelButton />
        </div>
    )
}

export default OrderForm
