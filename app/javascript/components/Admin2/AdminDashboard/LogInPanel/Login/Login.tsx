import React, {FC} from 'react'

interface Props{login: string, setLogin: (login: string) => void}

const Login:FC<Props> = ({login, setLogin}) => {
    return (
        <div className="input-container">
            <div>
                <label htmlFor="login" className="input-container__label">Login</label>
            </div>
            
            <div>
                <input type="text" className="input-container__input" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
        </div>
    )
}

export default Login