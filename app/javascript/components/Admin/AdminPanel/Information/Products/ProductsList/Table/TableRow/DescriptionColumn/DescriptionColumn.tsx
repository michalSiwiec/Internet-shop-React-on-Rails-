import React, {FC} from 'react'

interface Props {
    description: any
}

const DescriptionColumn:FC<Props> = ({description}) => <td><span>{description}</span></td>

export default DescriptionColumn
