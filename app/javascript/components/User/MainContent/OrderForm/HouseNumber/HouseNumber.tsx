import React, {FC} from 'react'

interface Props {
    houseNumber: {value: number, unmutable: boolean},
    setHouseNumber: (houseNumber: {value: number, unmutable: boolean}) => void
}

const HouseNumber:FC<Props> = ({houseNumber, setHouseNumber}) => {
    return (
        <div className="data-container">
            <label>
                Numer domu / mieszkania
                <input type="number"
                    value={houseNumber.value}
                    min="1"
                    disabled={houseNumber.unmutable}
                    onChange={(e) => setHouseNumber({value: parseInt(e.target.value), unmutable: houseNumber.unmutable})}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    className="flat-number"
                />
            </label>
        </div>
    )
}

export default HouseNumber
