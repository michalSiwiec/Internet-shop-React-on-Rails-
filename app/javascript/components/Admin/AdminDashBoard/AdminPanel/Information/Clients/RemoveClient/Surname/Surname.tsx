import React, {FC} from 'react'

interface Props {
    surname: string
}

const Surname:FC<Props> = ({surname}) => {
    return (
        <div>
            <input type="text" disabled value={surname} />
        </div>
    )
}

export default Surname
