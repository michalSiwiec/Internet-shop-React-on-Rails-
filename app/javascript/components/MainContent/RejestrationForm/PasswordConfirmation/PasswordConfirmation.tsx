import React, {FC} from 'react'

import {validatePasswordConfirmation} from '../../../../Helpers/Users/Users'

// Something doesn't work here

interface Props {
    passwordConfirmation: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    password: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    }
    setPasswordConfirmation:any,
}

const PasswordConfirmation: FC<Props> = ({passwordConfirmation, password, setPasswordConfirmation}) => {
    return (
        <div>
            <div>
                <input type="text"
                    placeholder="Potwierdz hasło"
                    onChange={(e) => validatePasswordConfirmation(e.target.value, setPasswordConfirmation, passwordConfirmation, password)}
                />
            </div>

            <div className="mistake-information-container">
                {passwordConfirmation.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PasswordConfirmation
