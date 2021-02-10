import React, {FC} from 'react'

interface Props {
    phoneNumber: string
}

const PhoneNumberColumn:FC<Props> = ({phoneNumber}) =>  {
    return (
        <td>{phoneNumber}</td>
    )
}

export default PhoneNumberColumn
