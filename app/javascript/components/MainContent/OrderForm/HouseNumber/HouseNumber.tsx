import React, {FC} from 'react'

interface Props {
    houseNumber: {
        value: number,
        unmutable: boolean
    },
    setHouseNumber: any
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
                    onChange={(e) => setHouseNumber(e.target.value)}
                    onKeyPress={(e) => e.preventDefault()}
                    onKeyDown={(e) => e.preventDefault()}
                    className="flat-number"
                />
            </label>
        </div>
    )
}

export default HouseNumber
