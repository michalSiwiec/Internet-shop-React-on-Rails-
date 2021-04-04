import React, {FC} from 'react'

interface Props {
    houseNumber: string,
    setHouseNumber: (houseNumber: string) => void
}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div className="input-container">
            <p>Numer domu / mieszkania</p>
            <input type="number"
                placeholder="Numer domu"
                min="1" value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                onKeyPress={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
                className="input-container__input"
            />
        </div>
    )
}

export default HouseNumber
