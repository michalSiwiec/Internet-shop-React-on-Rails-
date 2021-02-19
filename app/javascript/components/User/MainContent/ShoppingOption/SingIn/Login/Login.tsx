import React, {FC} from 'react'

interface Props {login: string, setLogin: (login: string) => void}

const Login:FC<Props> = ({login, setLogin}) => {
    return (
        <div>
            <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}/>
        </div>
    )
}

export default Login
