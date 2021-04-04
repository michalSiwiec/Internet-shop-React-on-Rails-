import {IFieldForm} from '../../TypeScript/Interfaces/Interfaces'

export const checkDataForm = (datasToCheck:Array<boolean>) => {
    let allFieldsSetted = true

    datasToCheck.forEach(data => {
        if(!data)
            allFieldsSetted = false
    })

    if(allFieldsSetted)
        return true
    else
        return false
}

export const validateEmail = (value: string, setEmail: any, email: any) => {
    const req = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const copyMail = {...email}

    copyMail.value = value

    if(req.test(value)){
        copyMail.setted = true
        copyMail.mistakeInformation = []
    } else{
        copyMail.setted = false
        copyMail.mistakeInformation = [
            '* Niepoprawny format adresu E-mail',
        ]
    }

    setEmail(copyMail)
}

export const validatePhoneNumber = (value: string, setPhoneNumber: any, phoneNumber: any) => {
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

// I can have only one method which check correctness name and surname.

export const validateName = (value: string, setName: any, name: any) => {
    const req = /^[A-Z]{1}[a-z]{2,}$/
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

export const validateSurname = (value: string, setSurname: any, surname: any) => {
    const req = /^[A-Z]{1}[a-z]{2,}$/
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

// Stret to improve
export const validateStreet = (value: string, setStreet: any, street: any) => {
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

export const validateLogin = (value: string, setLogin: any, login: any) => {
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

export const validatePassword = (value: string, setPassword: (password: IFieldForm) => void, password: IFieldForm) => {
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
            '* Powinno składać się z min. jednej duzej litery oraz cyfry',
        ]
    }

    setPassword(copyPassword)
}

// It can only check if confirmation and password are the same - passsword has to be correct
export const validatePasswordConfirmation = (value: string, setPasswordConfirmation: (confirmation: IFieldForm) => void, passwordConfirmation: IFieldForm, password: string) => {
    const req = /(?=.*[0-9])(?=.*[A-Z])(?=.{8,})/
    const copyPasswordConfirmation = {...passwordConfirmation}

    copyPasswordConfirmation.value = value

    if(req.test(value) && value === password){
        copyPasswordConfirmation.setted = true
        copyPasswordConfirmation.mistakeInformation = []
    } else{
        copyPasswordConfirmation.setted = false
        copyPasswordConfirmation.mistakeInformation = [
            '* Hasło powinien mieć minimum 7 znaki!',
            '* Powinno składać się z min. jednej duzej litery oraz cyfry',
            '* Musi być identyczne do hasła'
        ]
    }

    setPasswordConfirmation(copyPasswordConfirmation)
}

// It can include also digit, letter small big etc
export const validateDescription = (value: string, setDescription: (desc: IFieldForm) => void, description: IFieldForm) => {
    const req = /^[A-Z]{1}[a-z]{2,}$/
    const copyDescription = {...description}

    copyDescription.value = value

    if(req.test(value)){
        copyDescription.setted = true
        copyDescription.mistakeInformation = []
    } else{
        copyDescription.setted = false
        copyDescription.mistakeInformation = [
            '* Opis powinien mieć minimum 3 znaki!',
            '* Dozwolone tylko litery, pierwsza powinna być duza!'
        ]
    }

    setDescription(copyDescription)
}
