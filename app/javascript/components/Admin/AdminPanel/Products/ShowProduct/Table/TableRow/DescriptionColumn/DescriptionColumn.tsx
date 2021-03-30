import React, {FC} from 'react'

interface Props {description: string}

const DescriptionColumn:FC<Props> = ({description}) => <td className="table__td"><span>{description}</span></td>

export default DescriptionColumn
