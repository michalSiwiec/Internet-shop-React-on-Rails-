import React, {FC} from 'react'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validatePhoneNumber} from '../../../../../Helpers/Users/Users'

interface Props {
    phoneNumber: IFieldForm,
    setPhoneNumber: (phoneNumber: IFieldForm) => void
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Nr. telefonu" onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)}/>
            </div>

            <div className="mistake-information-container">
                {phoneNumber.mistakeInformation.map((info: string) => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PhoneNumber
