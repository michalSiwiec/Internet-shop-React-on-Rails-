import React, {FC} from 'react'

interface Props {
    type: string,
    setType: any
}

const Type:FC<Props> = ({type, setType}) => {
    return (
        <div>
            <input type="text" placeholder="Typ produktu" value={type} onChange={(e) => setType(e.target.value)} />
        </div>
    )
}

export default Type
