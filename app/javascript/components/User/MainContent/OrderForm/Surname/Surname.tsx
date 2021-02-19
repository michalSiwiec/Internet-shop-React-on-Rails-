import React, {FC} from 'react'

import {IFieldFormUnmutable} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateSurname} from '../../../../../Helpers/Orders/Orders'

interface Props {
    surname: IFieldFormUnmutable,
    setSurname: (surname: IFieldFormUnmutable) => void
}

const Surname:FC<Props> = ({surname, setSurname}) => {
    return (
        <div className="data-container">
            <input type="text"
                value={surname.value}
                disabled={surname.unmutable}
                placeholder="Nazwisko"
                id='surname-input'
                className='data-container__value-input'
                onChange={(e) => validateSurname(e.target.value, setSurname, surname)}
            />

            <div className="mistake-info-container">
                {surname.mistakeInformation.map((info: string) => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Surname
