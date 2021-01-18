import React, {FC, useState} from 'react'

interface Props {
    password: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPassword:any
}

const Password:FC<Props> = ({password, setPassword}) => {

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
                '* Powinno składać się z min. jednej duzej litery oraz cyfry',
            ]
        }

        setPassword(copyPassword)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Hasło" onChange={(e) => checkPassword(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {password.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Password
