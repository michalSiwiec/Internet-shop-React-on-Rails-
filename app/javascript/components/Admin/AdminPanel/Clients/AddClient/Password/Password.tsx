import React, {FC} from 'react'

import {validatePassword} from '../../../../../../Helpers/Validation'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    password: IFieldForm,
    setPassword: (password: IFieldForm) => void
}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div className="input-container">
            <p>Hasło</p>
            
            <input type="text" value={password.value} onChange={(e) => validatePassword(e.target.value, setPassword, password)} className="input-container__input" />

            <div className="mistake-info-container">
                {password.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Password
