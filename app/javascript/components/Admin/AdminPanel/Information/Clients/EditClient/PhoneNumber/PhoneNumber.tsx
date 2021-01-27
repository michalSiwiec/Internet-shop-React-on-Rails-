import React, {FC} from 'react'

interface Props {
    phoneNumber: string,
    setPhoneNumber: any
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <input type="text" placeholder="Numer telefonu" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
    )
}

export default PhoneNumber
