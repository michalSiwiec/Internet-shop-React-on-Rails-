import React, {FC} from 'react'

import {validatePasswordConfirmation} from '../../../../../../../../../Helpers/Users/Users'

interface Props {
    passwordConfirmation: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPasswordConfirmation: any,
    password: string
}

const PasswordConfirmation:FC<Props> = ({passwordConfirmation, setPasswordConfirmation, password}) => {
    return (
        <div>
            <p>Potwierdzenie hasła</p>
            
            <div>
                <input type="text" value={passwordConfirmation.value} onChange={(e) => validatePasswordConfirmation(e.target.value, setPasswordConfirmation, passwordConfirmation, password)} />
            </div>

            <div className="mistake-info-container">
                {passwordConfirmation.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PasswordConfirmation
