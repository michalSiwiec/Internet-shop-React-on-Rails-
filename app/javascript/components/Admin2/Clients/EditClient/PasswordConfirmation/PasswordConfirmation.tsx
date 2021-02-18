import React, {FC} from 'react'

import {validatePasswordConfirmation} from '../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    passwordConfirmation: IFieldForm,
    setPasswordConfirmation: (confirmation: IFieldForm) => void
    password: string
}

const PasswordConfirmation:FC<Props> = ({passwordConfirmation, setPasswordConfirmation, password}) => {
    return (
        <div>
            <p>Potwierdzenie hasła</p>
            
            <input type="text" value={passwordConfirmation.value} onChange={(e) => validatePasswordConfirmation(e.target.value, setPasswordConfirmation, passwordConfirmation, password)} />

            <div className="mistake-info-container">
                {passwordConfirmation.mistakeInformation.map(info => <span key={`key${info}}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PasswordConfirmation
