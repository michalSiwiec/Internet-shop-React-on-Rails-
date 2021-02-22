import React, {FC} from 'react'

interface Props {houseNumber: number, setHouseNumber: (houseNumber: number) => void}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div className="input-container">
            <p>Numer domu / mieszkania</p>
            
            <input type="number" className="input-container__input"
                min="1"
                value={houseNumber}
                onChange={(e) => setHouseNumber(parseInt(e.target.value))}
                onKeyPress={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
            />
        </div>
    )
}

export default HouseNumber
