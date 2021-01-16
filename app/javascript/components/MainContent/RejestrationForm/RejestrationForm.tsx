import React, {useState, useEffect} from 'react'

import '../../../../assets/stylesheets/RejestrationForm.scss'

const RejestrationForm = () => {

    const [login, setLogin] = useState({value: '', setted: false})
    const [password, setPassword] = useState({value: '', setted: false})
    const [passwordConfirmation, setPasswordConfirmation] = useState({value: '', setted: false})
    const [name, setName] = useState({value: '', setted: false})
    const [surname, setSurname] = useState({value: '', setted: false})
    const [email, setEmail] = useState({value: '', setted: false})
    const [phoneNumber, setPhoneNumber] = useState({value: '', setted: false})
    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [street, setStreet] = useState({value: '', setted: false})
    const [postalCode, setPostalCode] = useState({value: '', setted: false})
    const [houseNumber, setHouseNumber] = useState({value: '', setted: false})

    const [provinces, setProvinces]:Array<any> = useState([])
    const [cities, setCities]:Array<any> = useState([])

    const registerUser = () => {

    }

    const checkDataForm = () => {
        console.log('checking value')

        
    }

    const checkLogin = (email:string) => {
        const req = /^[a-zA-Z0-9]{3,}/
        // const copyPresentState = {...formData}

        // copyPresentState.email.value = email

        // if(req.test(email))
        //     copyPresentState.email.setted = true
        // else
        //     copyPresentState.email.setted = false

        // setFormData(copyPresentState)
    }

    const checkPassword = (value:string) => {
        console.log(value)
    }

    const checkPasswordConfirmation = (value:string) => {
        console.log(value)
    }

    const checkName = (value:string) => {
        console.log(value)
    }

    const checkSurname = (value:string) => {
        console.log(value)
    }

    const checkMail = (value:string) => {
        console.log(value)
    }

    const checkPhoneNumber = (value:string) => {
        console.log(value)
    }

    const validateStreet = (value:string) => {
        console.log(value)
    }

    const validatePostalCode = (value:string) => {
        console.log(value)
    }

    const validateHouseNumber = (value:string) => {
        console.log(value)
    }

    useEffect(() => {
        let secondaryProvince:any; 
        let secondaryCities:any; 

        fetch('/api/v1/provinces',{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(data => secondaryProvince = data)
        .then(() => {
            return(
                new Promise((resolve, reject) => {
                    fetch('/api/v1/cities',{method: 'GET'})
                    .then(response => {
                        if(response.ok)
                            resolve(response.json())
                        else
                            throw Error(response.statusText);
                    })
                })
            )
        })
        .then((data) => secondaryCities = data)
        .then(() => {
            setProvinces(secondaryProvince)
            setCities(secondaryCities)
        })
        .catch(err => console.error(err))
    },[])

    const demandProvince = provinces.find(province_ => province_.name === province)
    const selectedCities = cities.filter(city_ => city_.province_id === demandProvince.id)

    return (
        <div className="rejestration-form-container">
            <form>
                <div className="header-container">
                    <h2>Załóz darmowe konto aby zakupy były jseszcze prostsze!</h2>
                </div>

                <div className="fields-container">
                    <div>
                        <input type="text" placeholder="Login" onChange={(e) => checkLogin(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Hasło" onChange={(e) => checkPassword(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Potwierdz hasło" onChange={(e) => checkPasswordConfirmation(e.target.value)}/>
                    </div>
                </div>

                <div className="fields-container">
                    <div>
                        <input type="text" placeholder="Imię" onChange={(e) => checkName(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Nazwisko" onChange={(e) => checkSurname(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Adres e-mail" onChange={(e) => checkMail(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Nr. telefonu" onChange={(e) => checkPhoneNumber(e.target.value)}/>
                    </div>
                </div>

                <div className="fields-container">
                    <div>
                        <select disabled>
                            <option defaultValue="Polska">Polska</option>
                        </select>
                    </div>

                    <div>
                        <select onChange={(e) => setProvince(e.target.value)}>
                            {provinces.map(province => <option key={`province${province.id}`}>{province.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <select onChange={(e) => setCity(e.target.value)}>
                            {selectedCities.map(city => <option key={`city${city.id}`}>{city.name} {city.postal_code}</option>)}
                        </select>
                    </div>

                    <div>
                        <input type="text" placeholder="Ulica" onChange={(e) => validateStreet(e.target.value)}/>
                    </div>

                    <div>
                        <input type="number" placeholder="Numer domu/mieszkania" onChange={(e) => validateHouseNumber(e.target.value)}/>
                    </div>
                </div>

                <div className="info-container">

                </div>

                <div className="submit-container">
                    <button onClick={checkDataForm}>Załóz konto</button>
                </div>
            </form>
        </div>
    )
}

export default RejestrationForm
