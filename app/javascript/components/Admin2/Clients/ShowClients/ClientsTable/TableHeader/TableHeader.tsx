import React, {FC} from 'react'

interface Props {columnName: string, isInvisible: boolean}

const TableHeader:FC<Props> = ({columnName, isInvisible}) => <th className={`table__th ${isInvisible ? "--invisible" : ""}`}>{columnName}</th>

export default TableHeader
