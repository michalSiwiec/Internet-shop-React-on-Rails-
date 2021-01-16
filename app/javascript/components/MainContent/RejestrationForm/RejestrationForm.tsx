import React, {useState, useEffect} from 'react'

import '../../../../assets/stylesheets/RejestrationForm.scss'

const RejestrationForm = () => {
    const [formData, setFormData] = useState({
        login: {
            value: '',
            setted: false
        },
        password: {
            value: '',
            setted: false
        },
        passwordConfirmation: {
            value: '',
            setted: false
        },
        name: {
            value: '',
            setted: false
        },
        surname: {
            value: '',
            setted: false
        },
        email: {
            value: '',
            setted: false
        },
        phoneNumber: {
            value: '',
            setted: false
        },
        province: {
            value: '',
            setted: false
        },
        street: {
            value: '',
            setted: false
        },
        postalCode: {
            value: '',
            setted: false
        },
        houseNumber: {
            value: '',
            setted: false
        }
    })

    // const [mistakeInformation, setMistakeInformation] = useState([]) 
    const [provinces, setProvinces] = useState([''])

    const registerUser = () => {

    }

    const checkDataForm = () => {
        console.log('checking value')

        
    }

    const checkLogin = (email:string) => {
        const req = /^[a-zA-Z0-9]{3,}/
        const copyPresentState = {...formData}

        copyPresentState.email.value = email

        if(req.test(email))
            copyPresentState.email.setted = true
        else
            copyPresentState.email.setted = false

        setFormData(copyPresentState)
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
        console.log('useEffect')

        setProvinces(['Hello'])
    }, [])

    // console.log(provinces)

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
                        <select>
                            <option value="Dolnośląskie">Dolnośląskie</option>
                            <option value="Kujawsko-pomorskie">Kujawsko-pomorskie</option>
                            <option value="Lubelskie">Lubelskie</option>
                            <option value="Lubuskie">Lubuskie</option>
                            <option value="Łódzkie">Łódzkie</option>
                            <option value="Małopolskie">Małopolskie</option>
                            <option value="Mazowieckie">Mazowieckie</option>
                            <option value="Opolskie">Opolskie</option>
                            <option value="Podkarpackie">Podkarpackie</option>
                            <option value="Podlaskie">Podlaskie</option>
                            <option value="Pomorskie">Pomorskie</option>
                            <option value="Śląskie">Śląskie</option>
                            <option value="Świętokrzyskie">Świętokrzyskie</option>
                            <option value="Warmińsko-mazurskie">Warmińsko-mazurskie</option>
                            <option value="Wielkopolskie">Wielkopolskie</option>
                            <option value="Zachodniopomorskie">Zachodniopomorskie</option>
                        </select>
                    </div>

                    <div>
                        <select>
                            <option value="Kraków">Kraków</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Gdańsk">Gdańsk</option>
                            <option value="Łódz">Łódz</option>
                            <option value="Bielsko-biała">Bielsko-biała</option>
                            <option value="Żywiec">Żywiec</option>
                            <option value="Gliwice">Gliwice</option>
                        </select>
                    </div>

                    <div>
                        <input type="text" placeholder="Ulica" onChange={(e) => validateStreet(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Kod pocztowy np. 34 - 300" onChange={(e) => validatePostalCode(e.target.value)}/>
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
