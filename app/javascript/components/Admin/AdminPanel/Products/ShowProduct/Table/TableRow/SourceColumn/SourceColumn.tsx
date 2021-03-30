import React, {FC} from 'react'

interface Props {source: string}

const SourceColumn:FC<Props> = ({source}) => {
    return(
        <td className="table__td --invisible">
            <img src={`${source}`} className="table__td__img"/>
        </td>
    )
}

export default SourceColumn
