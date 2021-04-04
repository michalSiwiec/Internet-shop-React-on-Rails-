import React, {FC} from 'react'

import {validatePhoneNumber} from '../../../../../../Helpers/Validation'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {phoneNumber: IFieldForm, setPhoneNumber: (number: IFieldForm) => void}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div className="input-container">
            <p>Numer telefonu</p>
            
            <input
                type="text"
                placeholder="Numer telefonu"
                value={phoneNumber.value}
                onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)} 
                className="input-container__input"
            />

            <div className="mistake-info-container">
                {phoneNumber.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PhoneNumber
