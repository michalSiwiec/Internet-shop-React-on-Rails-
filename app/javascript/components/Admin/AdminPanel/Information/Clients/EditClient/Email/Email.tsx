import React, {FC} from 'react'

interface Props {
    email: string,
    setEmail: any
}

const Email:FC<Props> = ({email, setEmail}) => {
    return (
        <div>
            <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
    )
}

export default Email
