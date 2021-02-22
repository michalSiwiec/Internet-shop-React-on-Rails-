import React, {FC} from 'react'

interface Props {phoneNumber: string}

const PhoneNumberColumn:FC<Props> = ({phoneNumber}) =>  {
    return (
        <td className="table__td --invisible">{phoneNumber}</td>
    )
}

export default PhoneNumberColumn
