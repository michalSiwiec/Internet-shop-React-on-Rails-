import React, {FC} from 'react'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateLogin} from '../../../../../Helpers/Validation'

interface Props {
    login: IFieldForm,
    setLogin: (login: IFieldForm) => void
}

const Login:FC<Props> = ({login, setLogin}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Login" onChange={(e) => validateLogin(e.target.value, setLogin, login)}/>
            </div>

            <div className="mistake-information-container">
                {login.mistakeInformation.map((info: string) => <p key={`Info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Login
