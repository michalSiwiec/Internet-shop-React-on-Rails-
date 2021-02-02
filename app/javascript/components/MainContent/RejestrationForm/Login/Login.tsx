import React, {FC} from 'react'

import {validateLogin} from '../../../../Helpers/Users/Users'

interface Props {
    login: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setLogin:any
}

const Login:FC<Props> = ({login, setLogin}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Login" onChange={(e) => validateLogin(e.target.value, setLogin, login)}/>
            </div>

            <div className="mistake-information-container">
                {login.mistakeInformation.map(info => <p key={`Info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Login
