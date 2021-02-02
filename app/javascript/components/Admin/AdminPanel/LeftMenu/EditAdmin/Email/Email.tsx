import React, {FC} from 'react'

import {validateEmail} from '../../../../../../Helpers/Admins/Admins'

interface Props {
    email: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setEmail: any
}

const Email:FC<Props> = ({email, setEmail}) =>  {
    return (
        <div>
            {/* <input type="text" value={email.value} onChange={(e) => setEmail(e.target.value)} /> */}
            <input type="text" value={email.value} onChange={(e) => validateEmail(e.target.value, setEmail, email)} />

            <div className="mistake-info-container">
                {email.mistakeInformation.map(info => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Email
