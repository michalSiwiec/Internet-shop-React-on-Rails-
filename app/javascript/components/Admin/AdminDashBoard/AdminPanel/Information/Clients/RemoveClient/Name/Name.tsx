import React, {FC} from 'react'

interface Props {
    name: string
}

const Name:FC<Props> = ({name}) => {
    return (
        <div>
            <input type="text" disabled value={name} />
        </div>
    )
}

export default Name
