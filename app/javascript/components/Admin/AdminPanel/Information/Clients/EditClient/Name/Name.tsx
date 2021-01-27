import React, {FC} from 'react'

interface Props {
    name: string,
    setName: any
}

const Name:FC<Props> = ({name, setName}) => {
    return (
        <div>
            <input type="text" placeholder="Imie" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default Name
