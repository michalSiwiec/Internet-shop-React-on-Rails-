import React, {FC} from 'react'

interface Props {email: string}

const EmailColumn:FC<Props> = ({email}) =>  {
    return (
        <td className="table__td --invisible">{email}</td>
    )
}

export default EmailColumn