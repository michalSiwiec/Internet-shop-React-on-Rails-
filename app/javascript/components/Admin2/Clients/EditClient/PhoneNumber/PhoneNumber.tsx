import React, {FC} from 'react'

import {validatePhoneNumber} from '../../../../../Helpers/Users/Users'

interface Props {
    phoneNumber: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPhoneNumber: any
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <p>Numer telefonu</p>
            
            <input type="text" placeholder="Numer telefonu" value={phoneNumber.value} onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)} />

            <div className="mistake-info-container">
                {phoneNumber.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PhoneNumber
