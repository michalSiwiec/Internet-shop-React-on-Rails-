import React, {FC} from 'react'

import {validatePhoneNumber} from '../../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    phoneNumber: IFieldForm,
    setPhoneNumber: (phoneNumber: IFieldForm) => void
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <p>Numer telefonu</p>
            
            <input type="text" value={phoneNumber.value} onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)} />

            <div className="mistake-info-container">
                {phoneNumber.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PhoneNumber
