import React, {useState} from 'react'

import '../../../../assets/stylesheets/OrderForm'

const OrderForm = () => {

    const [partsVisibilities, setPartsVisibilities] = useState(['', 'invisible', 'invisible'])
    const [formData, setFormData] = useState({
        email: {
            value: '',
            setted: false
        },
        repeatedEmail: {
            value: '',
            setted: false
        },
        phoneNumber: {
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
        city: {
            value: '',
            setted: false
        },
        street: {
            value: '',
            setted: false
        }
    })


    const checkDataForm = (updateState:any, value:string) => {
        const copyPresentState = {...formData}

        updateState(value, copyPresentState)

        if(formData.email.setted && formData.repeatedEmail.setted && formData.phoneNumber.setted){
            if(formData.name.setted && formData.surname.setted){
                setPartsVisibilities(['','',''])
                return
            }
            setPartsVisibilities(['','','invisible'])
        }
        else
            setPartsVisibilities(['','invisible','invisible'])
    }

    const checkEmail = (email: string, copyPresentState:any) => {
        const req = /^[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/

        copyPresentState.email.value = email

        if(req.test(email))
            copyPresentState.email.setted = true
        else
            copyPresentState.email.setted = false

        setFormData(copyPresentState)
    }

    const checkRepeatedEmail = (repeatedEmail: string, copyPresentState:any) => {
        const req = /^[a-zA-Z0-9]{3,}\.[a-zA-Z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/

        copyPresentState.repeatedEmail.value = repeatedEmail

        if(req.test(repeatedEmail) && repeatedEmail == formData.email.value)
            copyPresentState.repeatedEmail.setted = true
        else
            copyPresentState.repeatedEmail.setted = false

        setFormData(copyPresentState)
    }

    const checkPhoneNUmber = (phoneNumber: string, copyPresentState:any) => {
        const req = /^[0-9]{9}$/

        copyPresentState.phoneNumber.value = phoneNumber

        if(req.test(phoneNumber))
            copyPresentState.phoneNumber.setted = true
        else
            copyPresentState.phoneNumber.setted = false

        setFormData(copyPresentState)
    }

    const checkName = (name: string, copyPresentState:any) => {
        const req = /^[A-Z]{1}[a-z]{2,}$/

        copyPresentState.name.value = name

        if(req.test(name))
            copyPresentState.name.setted = true
        else
            copyPresentState.name.setted = false

        setFormData(copyPresentState)
    }

    const checkSurname = (surname: string, copyPresentState:any) => {
        const req = /^[A-Z]{1}[a-z]{2,}$/

        copyPresentState.surname.value = surname

        if(req.test(surname))
            copyPresentState.surname.setted = true
        else
            copyPresentState.surname.setted = false

        setFormData(copyPresentState)
    }

    const checkStreet = (street: string, copyPresentState:any) => {
        const req = /^[A-Z]{1}[a-z\-0-9]{3,}$/

        copyPresentState.street.value = street

        if(req.test(street))
            copyPresentState.street.setted = true

        setFormData(copyPresentState)
    }

    // console.log(`${formData.name.value} ${formData.name.setted}`)
    // console.log(`${formData.surname.value} ${formData.surname.setted}`)
    // // console.log(`${formData.name.value} ${formData.name.setted}`)

    return (
        <div className="order-form-container">
            <div className={`part-container ${partsVisibilities[0]}`}>
                <div className="header-container">
                    <h3>Dane kontaktssowe</h3>
                </div>

                <div className="data-container">
                    <input type="text" 
                        placeholder="E-mail"
                        id="email-input" className='data-container__value-input'
                        onChange={(e) => checkDataForm(checkEmail,e.target.value)}
                    />
                </div>

                <div className="data-container">
                    <input type="text"
                        placeholder="Powtórz adres e-mail"
                        id="repeated-email-input"
                        className='data-container__value-input'
                        onChange={(e) => checkDataForm(checkRepeatedEmail,e.target.value)}
                    />
                </div>

                <div className="data-container">
                    <input type="text"
                        placeholder="Nr. telefonu komórkowego"
                        id='phone-number-input'
                        className='data-container__value-input'
                        onChange={(e) => checkDataForm(checkPhoneNUmber,e.target.value)}
                    />
                </div>
            </div>

            <div className={`part-container ${partsVisibilities[1]}`}>
                <div className="header-container">
                    <h3>Dane osobowe</h3>
                </div>

                <div className="data-container">
                    <input type="text"
                        placeholder="Imię"
                        id='name-input'
                        className='data-container__value-input'
                        onChange={(e) => checkDataForm(checkName,e.target.value)}
                    />
                </div>

                <div className="data-container">
                    <input type="text"
                        placeholder="Nazwisko"
                        id='surname-input'
                        className='data-container__value-input'
                        onChange={(e) => checkDataForm(checkSurname,e.target.value)}
                    />
                </div>
            </div>

            <div className={`part-container ${partsVisibilities[2]}`}>
                <div className="header-container">
                    <h3>Dane dostawcze</h3>
                </div>

                <div className="data-container">
                    <label> Miasto
                        <select>
                            <option>Żywiec</option>
                            <option>Kraków</option>
                            <option>Pozań</option>
                            <option>Gliwice</option>
                        </select>
                    </label>
                </div>

                <div className="data-container">
                    <input type="text"
                        placeholder="Ulica"
                        id='street-input'
                        className='data-container__value-input'
                        onChange={(e) => checkDataForm(checkStreet,e.target.value)}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default OrderForm
