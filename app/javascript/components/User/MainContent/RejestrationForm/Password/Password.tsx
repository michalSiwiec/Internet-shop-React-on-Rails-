import React, {FC} from 'react'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validatePassword} from '../../../../../Helpers/Validation'

interface Props {
    password: IFieldForm,
    setPassword: (password: IFieldForm) => void
}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div>
            <div>
                <input type="password" placeholder="Hasło" onChange={(e) => validatePassword(e.target.value, setPassword, password)} />
            </div>

            <div className="mistake-information-container">
                {password.mistakeInformation.map((info: string) => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Password
