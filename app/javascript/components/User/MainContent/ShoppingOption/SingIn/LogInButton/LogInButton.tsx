import React, {FC} from 'react'

interface Props {
    LogIn: any
}

const LogInButton:FC<Props> = ({LogIn}) => {
    return (
        <div>
            <button onClick={LogIn} className="log-in-btn">Zaloguj się</button>
        </div>
    )
}

export default LogInButton
