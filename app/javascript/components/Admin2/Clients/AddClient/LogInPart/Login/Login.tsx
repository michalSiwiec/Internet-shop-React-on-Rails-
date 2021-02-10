import React, {FC} from 'react'

import {validateLogin} from '../../../../../../Helpers/Users/Users'

interface Props {
    login: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setLogin: any
}

const Login:FC<Props> = ({login, setLogin}) => {
    return (
        <div>
            <p>Login</p>
            
            <input type="text" value={login.value} onChange={(e) => validateLogin(e.target.value, setLogin, login)} />

            <div className="mistake-info-container">
                {login.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Login
