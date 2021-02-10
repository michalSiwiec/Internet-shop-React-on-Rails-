import React, {FC} from 'react'

interface Props {
    source: any
}

const SourceColumn:FC<Props> = ({source}) => <td><img src={`${source}`}/></td>

export default SourceColumn
