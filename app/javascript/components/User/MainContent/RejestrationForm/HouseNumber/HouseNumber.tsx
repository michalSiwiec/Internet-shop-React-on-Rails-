import React, {FC} from 'react'

interface Props {
    houseNumber: string,
    setHouseNumber: any
}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div>
            <div>
                <input type="number"
                    min={1}
                    max={5000}
                    value={houseNumber}
                    placeholder="Numer domu/mieszkania"
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    onChange={(e) => setHouseNumber(e.target.value)}
                />
            </div>
        </div>
    )
}

export default HouseNumber
