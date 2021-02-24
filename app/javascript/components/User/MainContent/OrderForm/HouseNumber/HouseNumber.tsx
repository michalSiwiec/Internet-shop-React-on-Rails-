import React, {FC} from 'react'

interface Props {
    houseNumber: {value: number, unmutable: boolean},
    setHouseNumber: (houseNumber: {value: number, unmutable: boolean}) => void
}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div className="data-container">
            <p className="data-container__label">Numer domu / mieszkania</p>

            <input type="number"
                value={houseNumber.value}
                min="1"
                disabled={houseNumber.unmutable}
                onChange={(e) => setHouseNumber({value: parseInt(e.target.value), unmutable: houseNumber.unmutable})}
                onKeyPress={(e) => e.preventDefault()}
                onKeyDown={(e) => e.preventDefault()}
                className="data-container__value-input"
            />
        </div>
    )
}

export default HouseNumber
