import React, {FC} from 'react'

interface Props {
    login: string,
    setLogin: any
}

const Login:FC<Props> = ({login, setLogin}) => {
    return (
        <div>
            <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
    )
}

export default Login
