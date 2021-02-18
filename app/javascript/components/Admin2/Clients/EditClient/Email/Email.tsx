import React, {FC} from 'react'

import {validateEmail} from '../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    email: IFieldForm,
    setEmail: (email: IFieldForm) => void
}

const Email:FC<Props> = ({email, setEmail}) => {
    return (
        <div>
            <p>Adres e-mail</p>
            
            <input type="text" value={email.value} onChange={(e) => validateEmail(e.target.value, setEmail, email)} />

            <div className="mistake-info-container">
                {email.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Email
