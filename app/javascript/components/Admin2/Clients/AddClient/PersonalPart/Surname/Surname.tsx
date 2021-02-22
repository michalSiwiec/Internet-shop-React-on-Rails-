import React, {FC} from 'react'

import {validateSurname} from '../../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    surname: IFieldForm,
    setSurname: (surname: IFieldForm) => void
}

const Surname:FC<Props> = ({surname, setSurname}) => {
    return (
        <div className="input-container">
            <p>Nazwisko</p>
            
            <input type="text" value={surname.value} onChange={(e) => validateSurname(e.target.value, setSurname, surname)} className="input-container__input" />

            <div className="mistake-info-container">
                {surname.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Surname
