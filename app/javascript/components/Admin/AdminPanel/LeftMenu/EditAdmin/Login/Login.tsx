import React, {FC} from 'react'

import {validateLogin} from '../../../../../../Helpers/Admins/Admins'

interface Props {
    login: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setLogin: any
}

const Login:FC<Props> = ({login, setLogin}) =>  {
    return (
        <div>
            <input type="text" value={login.value} onChange={(e) => validateLogin(e.target.value, setLogin, login)} />

            <div className="mistake-info-container">
                {login.mistakeInformation.map(info => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Login
