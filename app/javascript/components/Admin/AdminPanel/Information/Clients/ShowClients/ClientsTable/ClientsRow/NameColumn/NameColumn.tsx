import React, {FC} from 'react'

interface Props {
    name: string
}

const NameColumn:FC<Props> = ({name}) =>  {
    return (
        <td>{name}</td>
    )
}

export default NameColumn
