import React, {FC} from 'react'

import {IFieldFormUnmutable} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateEmail} from '../../../../../Helpers/Validation'

interface Props {email: IFieldFormUnmutable, setEmail: (email: IFieldFormUnmutable) => void}

const Email:FC<Props> = ({email, setEmail}) => {
    return (
        <div className="data-container">
            <input type="text"
                disabled={email.unmutable}
                value={email.value}
                placeholder="E-mail"
                id="email-input" className='data-container__value-input'
                onChange={(e) => validateEmail(e.target.value, setEmail, email)}
            />

            <div className="mistake-info-container">
                {email.mistakeInformation.map((info: string) => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Email
