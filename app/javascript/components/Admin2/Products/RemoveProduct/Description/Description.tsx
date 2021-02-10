import React, {FC} from 'react'

interface Props {
    description: string,
}

const Description:FC<Props> = ({description}) => {
    return (
        <div>
            <input type="text" value={description} disabled />
        </div>
    )
}

export default Description
