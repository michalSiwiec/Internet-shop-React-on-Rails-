import React, {FC} from 'react'

import {validatePasswordConfirmation} from '../../../../../../Helpers/Validation'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

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
                    type="password"
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
