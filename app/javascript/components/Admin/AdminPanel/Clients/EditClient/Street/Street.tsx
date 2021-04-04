import React, {FC} from 'react'

import {validateStreet} from '../../../../../../Helpers/Validation'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {street: IFieldForm, setStreet: (street: IFieldForm) => void}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div className="input-container" >
            <p>Ulica</p>
            
            <input type="text" value={street.value} onChange={(e) => validateStreet(e.target.value, setStreet, street)} className="input-container__input" />

            <div className="mistake-info-container">
                {street.mistakeInformation.map(info => <span key={`info${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Street
