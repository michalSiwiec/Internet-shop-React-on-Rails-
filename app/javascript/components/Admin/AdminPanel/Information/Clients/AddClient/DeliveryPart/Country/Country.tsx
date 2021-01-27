import React, {FC} from 'react'

interface Props {
    country: string,
    setCountry: any
}

const Country:FC<Props> = ({country, setCountry}) => {
    return (
        <div>
            <input type="text" placeholder="Kraj" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
    )
}

export default Country
