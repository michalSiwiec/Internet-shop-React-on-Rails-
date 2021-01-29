import React, {FC} from 'react'

interface Props {
    houseNumber: string,
    setHouseNumber: any
}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div>
            <input type="number"
                placeholder="Numer domu"
                min="1" value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                onKeyPress={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
            />
        </div>
    )
}

export default HouseNumber
