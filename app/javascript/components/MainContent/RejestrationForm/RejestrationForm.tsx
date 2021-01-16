import React, {useState, useEffect} from 'react'

import '../../../../assets/stylesheets/RejestrationForm.scss'

const RejestrationForm = () => {

    const [login, setLogin]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [password, setPassword]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [passwordConfirmation, setPasswordConfirmation]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })
    const [name, setName]:Array<any> = useState({
        value: '',
        setted: false,
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

    const [street, setStreet]:Array<any>  = useState({
        value: '', 
        setted: false,
        mistakeInformation: []
    })
    const [email, setEmail]:Array<any> = useState({
        value: '',
        setted: false,
        mistakeInformation: []
    })


    const [province, setProvince] = useState('Śląskie')
    const [city, setCity] = useState('Gliwice')
    const [postalCode, setPostalCode] = useState('44 - 119')
    const [houseNumber, setHouseNumber] = useState('1')





    const [provinces, setProvinces]:Array<any> = useState([])
    const [cities, setCities]:Array<any> = useState([])



    // const registerUser = () => {

    // }

    const checkDataForm = () => {
        console.log('checking value')

        
    }

    const checkLogin = (value:string) => {
        const req = /^[a-zA-Z0-9]{3,}/
        const copyLogin = {...login}

        copyLogin.value = value

        if(req.test(value)){
            copyLogin.setted = true
            copyLogin.mistakeInformation = []
        } else{
            copyLogin.setted = false
            copyLogin.mistakeInformation = [
                '* Login powinien mieć minimum 3 znaki!',
                '* Dozwolone tylko litery oraz cyfry!'
            ]
        }

        setLogin(copyLogin)
    }

    const checkPassword = (value:string) => {
        const req = /(?=.*[0-9])(?=.*[A-Z])(?=.{8,})/
        const copyPassword = {...password}

        copyPassword.value = value

        if(req.test(value)){
            copyPassword.setted = true
            copyPassword.mistakeInformation = []
        } else{
            copyPassword.setted = false
            copyPassword.mistakeInformation = [
                '* Hasło powinien mieć minimum 7 znaki!',
                '* Powinno składać się z min. jednej duzej litery oraz cyfry'
            ]
        }

        setPassword(copyPassword)
    }

    const checkPasswordConfirmation = (value:string) => {
        const req = /(?=.*[0-9])(?=.*[A-Z])(?=.{8,})/
        const copyPasswordConfirmation = {...passwordConfirmation}

        copyPasswordConfirmation.value = value

        if(req.test(value) && value === password.value){
            copyPasswordConfirmation.setted = true
            copyPasswordConfirmation.mistakeInformation = []
        } else{
            copyPasswordConfirmation.setted = false
            copyPasswordConfirmation.mistakeInformation = [
                '* Hasło powinien mieć minimum 7 znaki!',
                '* Powinno składać się z min. jednej duzej litery oraz cyfry',
                '* Potwierdzenie hasła i hasło powinno by takie samo!'
            ]
        }

        setPasswordConfirmation(copyPasswordConfirmation)
    }

    const checkName = (value:string) => {
        const req = /^[A-Z]{1}[a-z]{2,}/
        const copyName = {...name}

        copyName.value = value

        if(req.test(value)){
            copyName.setted = true
            copyName.mistakeInformation = []
        } else{
            copyName.setted = false
            copyName.mistakeInformation = [
                '* Imię powinno mieć minimum 3 znaki!',
                '* Imię powinno składać się z samych liter',
                '* Pierwsza litera powinna być duza'
            ]
        }

        setName(copyName)
    }

    const checkSurname = (value:string) => {
        const req = /^[A-Z]{1}[a-z]{2,}/
        const copySurname = {...surname}

        copySurname.value = value

        if(req.test(value)){
            copySurname.setted = true
            copySurname.mistakeInformation = []
        } else{
            copySurname.setted = false
            copySurname.mistakeInformation = [
                '* Nazwisko powinno mieć minimum 3 znaki!',
                '* Nazwisko powinno składać się z samych liter',
                '* Pierwsza litera powinna być duza'
            ]
        }

        setSurname(copySurname)
    }

    const checkMail = (value:string) => {
        const req = /^[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
        const copyMail = {...email}

        copyMail.value = value

        if(req.test(value)){
            copyMail.setted = true
            copyMail.mistakeInformation = []
        } else{
            copyMail.setted = false
            copyMail.mistakeInformation = [
                '* Adres E-mail powinien być w formacie JanKowalski@gmail.com',
            ]
        }

        setEmail(copyMail)
    }

    const checkPhoneNumber = (value:string) => {
        const req = /^[0-9]{9}$/
        const copyPhoneNumber = {...phoneNumber}

        copyPhoneNumber.value = value

        if(req.test(value)){
            copyPhoneNumber.setted = true
            copyPhoneNumber.mistakeInformation = []
        } else{
            copyPhoneNumber.setted = false
            copyPhoneNumber.mistakeInformation = [
                '* Numer telefonu powinnien składać się z 9 cyfr!',
            ]
        }

        setPhoneNumber(copyPhoneNumber)
    }

    const validateStreet = (value:string) => {
        const req = /^[A-Z]{1}[a-z]{2,}$/
        const copyStreet = {...street}

        copyStreet.value = value

        if(req.test(value)){
            copyStreet.setted = true
            copyStreet.mistakeInformation = []
        } else{
            copyStreet.setted = false
            copyStreet.mistakeInformation = [
                '* Nazwa ulicy powinna składać się z samych liter!',
                '* Pierwsza litera powinna być pisana duzą literą',
                '* Minimalna liczba zanków to 3!'
            ]
        }

        setStreet(copyStreet)
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
                    <h2>Załóz darmowe konto aby zakupy były jeszcze prostsze!</h2>
                </div>

                <div className="fields-container">
                    <div>
                        <div>
                            <input type="text" placeholder="Login" onChange={(e) => checkLogin(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {login.mistakeInformation.map(info => <p key={`Info__${info}`}>{info}</p>)}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="Hasło" onChange={(e) => checkPassword(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {password.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="Potwierdz hasło" onChange={(e) => checkPasswordConfirmation(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {passwordConfirmation.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>
                </div>

                <div className="fields-container">
                    <div>
                        <div>
                            <input type="text" placeholder="Imię" onChange={(e) => checkName(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {name.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="Nazwisko" onChange={(e) => checkSurname(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {surname.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="Adres e-mail" onChange={(e) => checkMail(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {email.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="Nr. telefonu" onChange={(e) => checkPhoneNumber(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {phoneNumber.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
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
                        <div>
                            <input type="text" placeholder="Ulica" onChange={(e) => validateStreet(e.target.value)}/>
                        </div>

                        <div className="mistake-information-container">
                            {street.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="number"
                                min={1}
                                max={5000}
                                value={houseNumber}
                                placeholder="Numer domu/mieszkania"
                                onKeyPress={(e) => e.preventDefault()}
                                onKeyDown={(e) => e.preventDefault()}
                                onChange={(e) => setHouseNumber(e.target.value)}
                            />
                        </div>

                        <div className="mistake-information-container">
                            {login.mistakeInformation.map(info => <p>{info}</p>)}
                        </div>
                    </div>
                </div>

                <div className="submit-container">
                    <button onClick={checkDataForm}>Załóz konto</button>
                </div>
            </form>
        </div>
    )
}

export default RejestrationForm
