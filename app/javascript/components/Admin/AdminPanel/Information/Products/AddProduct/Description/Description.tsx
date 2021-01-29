import React, {FC} from 'react'

interface Props {
    description: string,
    setDescription: any
}

const Description:FC<Props> = ({description, setDescription}) => {
    return (
        <div>
            <input type="text" placeholder="Opis produktu" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
    )
}

export default Description
