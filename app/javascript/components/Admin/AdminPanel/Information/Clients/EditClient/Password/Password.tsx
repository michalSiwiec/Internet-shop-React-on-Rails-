import React, {FC} from 'react'

interface Props {
    password: string,
    setPassword: any
}

const Password:FC<Props> = ({password, setPassword}) => {
    return (
        <div>
            <input type="text" placeholder="Hasło" value={password} onChange={(e) => setPassword=(e.target.value)} />
        </div>
    )
}

export default Password
