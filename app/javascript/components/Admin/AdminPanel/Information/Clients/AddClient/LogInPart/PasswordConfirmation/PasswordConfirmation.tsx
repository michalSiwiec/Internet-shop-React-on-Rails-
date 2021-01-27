import React, {FC} from 'react'

interface Props {
    passwordConfirmation: string,
    setPasswordConfirmation: any
}

const PasswordConfirmation:FC<Props> = ({passwordConfirmation, setPasswordConfirmation}) => {
    return (
        <div>
            <input type="text" placeholder="Powtórz hasło" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>
    )
}

export default PasswordConfirmation
