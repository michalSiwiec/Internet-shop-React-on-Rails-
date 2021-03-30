import React, {FC} from 'react'

interface Props {className: string, value: string}

const TableHeader:FC<Props> = ({className, value}) => <th className={className}>{value}</th>

export default TableHeader
