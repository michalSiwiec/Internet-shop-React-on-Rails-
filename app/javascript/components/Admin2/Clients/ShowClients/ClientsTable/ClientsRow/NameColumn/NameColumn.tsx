import React, {FC} from 'react'

interface Props {name: string}

const NameColumn:FC<Props> = ({name}) =>  {
    return (
        <td className="table__td">{name}</td>
    )
}

export default NameColumn
