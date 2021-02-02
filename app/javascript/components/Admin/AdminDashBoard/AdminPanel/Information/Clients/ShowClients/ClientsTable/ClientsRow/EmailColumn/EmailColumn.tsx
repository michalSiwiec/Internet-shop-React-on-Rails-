import React, {FC} from 'react'

interface Props {
    email: string
}

const EmailColumn:FC<Props> = ({email}) =>  {
    return (
        <td>{email}</td>
    )
}

export default EmailColumn
