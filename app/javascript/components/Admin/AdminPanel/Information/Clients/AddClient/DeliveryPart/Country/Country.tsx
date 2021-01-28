import React, {FC} from 'react'

interface Props {
    country: string,
    setCountry: any
}

const Country:FC<Props> = ({country, setCountry}) => {
    return (
        <div>
            <select disabled>
                <option>Polskaa</option>
            </select>
        </div>
    )
}

export default Country
