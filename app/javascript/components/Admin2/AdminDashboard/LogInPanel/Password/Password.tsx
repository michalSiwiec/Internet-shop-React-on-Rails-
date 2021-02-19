import React, {FC} from 'react'

interface Props{password: string, setPassword: (password: string) => void}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div className="input-container">
            <label htmlFor="password" className="input-container__label">Hasło</label>
            <input type="password" className="input-container__input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>  
    )
}

export default Password
