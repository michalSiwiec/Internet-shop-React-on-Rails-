import React, {FC} from 'react'

import {validatePassword} from '../../../../../../../../../Helpers/Users/Users'

interface Props {
    password: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPassword: any
}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div>
            <p>Hasło</p>
            
            <input type="text" value={password.value} onChange={(e) => validatePassword(e.target.value, setPassword, password)} />

            <div className="mistake-info-container">
                {password.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Password
