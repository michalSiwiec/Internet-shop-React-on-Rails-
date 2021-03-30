import React, {FC} from 'react'

interface Props {
    value: string,
    className: string
}

const TableHeader:FC<Props> = ({value, className}) => <th className={className}>{value}</th>

export default TableHeader
