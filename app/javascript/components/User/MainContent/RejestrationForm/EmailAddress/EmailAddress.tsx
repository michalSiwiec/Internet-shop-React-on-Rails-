import React, {FC} from 'react'

import {validateEmail} from '../../../../../Helpers/Users/Users'

interface Props {
    email: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setEmail:any
}

const Email:FC<Props> = ({email, setEmail}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Adres e-mail" onChange={(e) => validateEmail(e.target.value, setEmail, email)} />
            </div>

            <div className="mistake-information-container">
                {email.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Email