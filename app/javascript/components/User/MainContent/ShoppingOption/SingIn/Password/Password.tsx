import React, {FC} from 'react'

interface Props {password: string, setPassword: (password: string) => void}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div>
            <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
    )
}

export default Password
