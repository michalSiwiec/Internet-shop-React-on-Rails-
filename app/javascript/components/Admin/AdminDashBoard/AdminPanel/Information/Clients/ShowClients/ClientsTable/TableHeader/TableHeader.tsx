import React, {FC} from 'react'

interface Props {
    columnName: string
}

const TableHeader:FC<Props> = ({columnName}) => {
    return (
        <th>{columnName}</th>
    )
}

export default TableHeader
