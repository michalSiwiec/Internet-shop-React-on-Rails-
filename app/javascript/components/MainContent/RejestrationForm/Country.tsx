import React, {FC} from 'react'

interface Props {}

const Country:FC<Props> = () => {
    return (
        <div>
            <select disabled>
                <option defaultValue="Polska">Polska</option>
            </select>
        </div>
    )
}

export default Country
