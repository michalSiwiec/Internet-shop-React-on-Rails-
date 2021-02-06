export const checkDataForm = (datasToCheck:any) => {
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