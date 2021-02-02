import React, {FC} from 'react'

import {validatePassword} from '../../../../../../Helpers/Admins/Admins'

interface Props {
    password: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPassword: any
}

const Password:FC<Props> = ({password, setPassword}) =>  {
    return (
        <div>
            {/* <input type="text" value={password.value} onChange={(e) => setPassword(e.target.value)} /> */}
            <input type="text" value={password.value} onChange={(e) => validatePassword(e.target.value, setPassword, password)} />

            <div className="mistake-info-container">
                {password.mistakeInformation.map(info => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Password
