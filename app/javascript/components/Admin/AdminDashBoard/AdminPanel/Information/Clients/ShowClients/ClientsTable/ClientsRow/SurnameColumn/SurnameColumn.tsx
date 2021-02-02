import React, {FC} from 'react'

interface Props {
    surname: string
}

const SurnameColumn:FC<Props> = ({surname}) =>  {
    return (
        <td>{surname}</td>
    )
}

export default SurnameColumn
