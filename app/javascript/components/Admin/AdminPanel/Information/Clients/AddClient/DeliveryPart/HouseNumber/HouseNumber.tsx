import React, {FC} from 'react'

interface Props {
    houseNumber: string,
    setHouseNumber: any
}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div>
            <input type="number" placeholder="Numer domu" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
        </div>
    )
}

export default HouseNumber
