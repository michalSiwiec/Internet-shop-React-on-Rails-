import React, {FC} from 'react'

interface Props {source: string}

const SourceColumn:FC<Props> = ({source}) => <td><img src={`${source}`}/></td>

export default SourceColumn
