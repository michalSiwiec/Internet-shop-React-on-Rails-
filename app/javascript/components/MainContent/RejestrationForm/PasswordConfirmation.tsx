import React, {FC} from 'react'

interface Props {
    passwordConfirmation: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    password: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    }
    setPasswordConfirmation:any,
}

const PasswordConfirmation: FC<Props> = ({passwordConfirmation, password, setPasswordConfirmation}) => {

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


    return (
        <div>
            <div>
                <input type="text" placeholder="Potwierdz hasło" onChange={(e) => checkPasswordConfirmation(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {passwordConfirmation.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PasswordConfirmation
