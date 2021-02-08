import React, {FC, useState, useEffect} from 'react'

import {validatePhoneNumber} from '../../../../../Helpers/Orders/Orders'

interface Props {
    phoneNumber: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>,
        unmutable: boolean
    },
    setPhoneNumber: any
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
                {phoneNumber.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default PhoneNumber
