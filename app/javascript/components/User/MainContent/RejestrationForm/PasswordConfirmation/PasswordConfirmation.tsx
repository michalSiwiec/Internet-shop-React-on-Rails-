import React, {FC} from 'react'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validatePasswordConfirmation} from '../../../../../Helpers/Validation'

interface Props {
    passwordConfirmation: IFieldForm,
    password: string,
    setPasswordConfirmation: (passwordConfirmation: IFieldForm) => void
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
                {passwordConfirmation.mistakeInformation.map((info: string) => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PasswordConfirmation
