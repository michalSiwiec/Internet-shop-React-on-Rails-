import React, {FC} from 'react'

interface Props {
    street: string,
    setStreet: any
}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div>
            <input type="text" placeholder="Ulica" value={street} onChange={(e) => setStreet(e.target.value)} />
        </div>
    )
}

export default Street
