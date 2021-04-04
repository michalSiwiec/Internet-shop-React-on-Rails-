import React, {FC} from 'react'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateEmail} from '../../../../../Helpers/Validation'

interface Props {
    email: IFieldForm,
    setEmail: (email: IFieldForm) => void
}

const Email:FC<Props> = ({email, setEmail}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Adres e-mail" onChange={(e) => validateEmail(e.target.value, setEmail, email)} />
            </div>

            <div className="mistake-information-container">
                {email.mistakeInformation.map((info: string) => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Email