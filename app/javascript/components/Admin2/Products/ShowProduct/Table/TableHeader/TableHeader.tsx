import React, {FC} from 'react'

interface Props{columnName: string}

const TableHeader:FC<Props> = ({columnName}) => <th>{columnName}</th>

export default TableHeader
