import React, {FC} from 'react'

interface Props {
    city: string,
    setCity: any
}

const City:FC<Props> = ({city, setCity}) => {
    return (
        <div>
            <input type="text" placeholder="Miasto" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
    )
}

export default City
