import React, {useState, useEffect} from 'react'

import {useSelector} from 'react-redux'

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
import AddOrderButton from './AddOrderButton/AddOrderButton'

import '../../../../assets/stylesheets/OrderForm'

const OrderForm = () => {
    const userID = useSelector((state: any) => state.userReducer.user.userID)

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

    const submitOrder = () => {
        console.log('submit order')
    }

    useEffect(() => {
        if(userID !== 0)
            fetch(`/api/v1/users/get_user?userID=${userID}`, {method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then(user => {
                setEmail({
                    value: user.personal_data.email,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setPhoneNumber({
                    value: user.personal_data.phone_number,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setName({
                    value: user.personal_data.name,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setSurname({
                    value: user.personal_data.surname,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setStreet({
                    value: user.delivery_addresses.street,
                    setted: true,
                    mistakeInformation: [],
                    unmutable: true
                })
                setProvince({
                    value: user.delivery_addresses.province,
                    unmutable: true
                })
                setCity({
                    value: user.delivery_addresses.city,
                    unmutable: true
                })
                setHouseNumber({
                    value: user.delivery_addresses.house_number,
                    unmutable: true
                })
                setPostalCode(user.delivery_addresses.postal_code)
            })
    }, [])

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

            <AddOrderButton submitOrder={submitOrder} />
        </div>
    )
}

export default OrderForm
