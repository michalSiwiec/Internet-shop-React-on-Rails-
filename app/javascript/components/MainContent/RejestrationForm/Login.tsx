import React, {FC} from 'react'

interface Props {
    login: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setLogin:any
}

const Login:FC<Props> = ({login, setLogin}) => {
    
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

    return (
        <div>
            <div>
                <input type="text" placeholder="Login" onChange={(e) => checkLogin(e.target.value)}/>
            </div>

            <div className="mistake-information-container">
                {login.mistakeInformation.map(info => <p key={`Info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Login
