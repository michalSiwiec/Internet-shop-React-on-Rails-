import React, {FC} from 'react'

interface Props {
    phoneNumber: string,
    setPhoneNumber: any
}

const PhoneNumber = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <input type="text" placeholder="Numer teleefonu" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
    )
}

export default PhoneNumber
