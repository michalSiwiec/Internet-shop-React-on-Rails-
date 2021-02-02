import React, {FC} from 'react'

import {validatePhoneNumber} from '../../../../Helpers/Users/Users'

interface Props {
    phoneNumber: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setPhoneNumber:any
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Nr. telefonu" onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)}/>
            </div>

            <div className="mistake-information-container">
                {phoneNumber.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PhoneNumber
