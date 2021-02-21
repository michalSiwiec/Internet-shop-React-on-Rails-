import React, {FC} from 'react'

interface Props{columnName: string, isVisibleInSmallerSize: boolean}

const TableHeader:FC<Props> = ({columnName, isVisibleInSmallerSize}) => {
    return(
        <th className={`table_th ${!isVisibleInSmallerSize ? "--invisible" : ""}`}>
            {columnName}
        </th>
    )
}

export default TableHeader
