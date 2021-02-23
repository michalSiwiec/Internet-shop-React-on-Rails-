import React, {FC} from 'react'

import {validateStreet} from '../../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    street: IFieldForm,
    setStreet: (street: {value: string, setted: boolean, mistakeInformation: Array<string>}) => void
}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div className="input-container">
            <p>Ulica</p>
            
            <input type="text" value={street.value} onChange={(e) => validateStreet(e.target.value, setStreet, street)}  className="input-container__input" />

            <div className="mistake-info-container">
                {street.mistakeInformation.map(info => <p key={`key${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Street
