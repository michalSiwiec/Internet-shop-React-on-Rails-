import React, {FC, useState, useEffect} from 'react'

import {IFieldFormUnmutable} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validatePhoneNumber} from '../../../../../Helpers/Orders/Orders'

interface Props {
    phoneNumber: IFieldFormUnmutable,
    setPhoneNumber: (phoneNumber: IFieldFormUnmutable) => void
}

const PhoneNumber:FC<Props> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div className="data-container">
            <input type="text"
                value={phoneNumber.value}
                disabled={phoneNumber.unmutable}
                placeholder="Nr. telefonu komórkowego"
                className='data-container__value-input'
                onChange={(e) => validatePhoneNumber(e.target.value, setPhoneNumber, phoneNumber)}
            />

            <div className="mistake-info-container">
                {phoneNumber.mistakeInformation.map((info: string) => <p key={`key${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default PhoneNumber
