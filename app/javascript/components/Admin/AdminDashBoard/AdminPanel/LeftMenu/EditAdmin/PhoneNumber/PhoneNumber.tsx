import React, {FC} from 'react'

import {validatePhoneNumber} from '../../../../../../../Helpers/Admins/Admins'

interface Props {
    phoneNumber: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPhoneNumber: any
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) =>  {
    return (
        <div>
            <input type="text" value={phoneNumber.value} onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)} />

            <div className="mistake-info-container">
                {phoneNumber.mistakeInformation.map(info => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PhoneNumber
