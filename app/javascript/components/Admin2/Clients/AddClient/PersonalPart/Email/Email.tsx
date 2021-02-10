import React, {FC} from 'react'

import {validateEmail} from '../../../../../../Helpers/Users/Users'

interface Props {
    email: {
        value: string,
        setted: boolean,
        mistakeInformation: any
    },
    setEmail: any
}

const Email:FC<Props> = ({email, setEmail}) => {
    return (
        <div>
            <p>Adres E-mail</p>
            
            <input type="text" value={email.value} onChange={(e) => validateEmail(e.target.value, setEmail, email)} />

            <div className="mistake-info-container">
                {email.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Email
