import React, {FC, useState} from 'react'

import {validatePassword} from '../../../../../Helpers/Users/Users'

interface Props {
    password: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPassword:any
}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Hasło" onChange={(e) => validatePassword(e.target.value, setPassword, password)} />
            </div>

            <div className="mistake-information-container">
                {password.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Password
