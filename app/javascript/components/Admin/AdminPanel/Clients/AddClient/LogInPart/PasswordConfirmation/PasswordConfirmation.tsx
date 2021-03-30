import React, {FC} from 'react'

import {validatePasswordConfirmation} from '../../../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    passwordConfirmation: IFieldForm,
    setPasswordConfirmation: (confirmation: IFieldForm) => void,
    password: string
}

const PasswordConfirmation:FC<Props> = ({passwordConfirmation, setPasswordConfirmation, password}) => {
    return (
        <div className="input-container">
            <p>Potwierdzenie hasła</p>
            
            <div>
                <input
                    type="text"
                    value={passwordConfirmation.value}
                    onChange={(e) => validatePasswordConfirmation(e.target.value, setPasswordConfirmation, passwordConfirmation, password)}
                    className="input-container__input"
                />
            </div>

            <div className="mistake-info-container">
                {passwordConfirmation.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PasswordConfirmation
