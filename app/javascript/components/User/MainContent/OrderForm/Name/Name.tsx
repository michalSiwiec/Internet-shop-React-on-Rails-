import React, {FC} from 'react'

import {IFieldFormUnmutable} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateName} from '../../../../../Helpers/Validation'

interface Props {
    name: IFieldFormUnmutable,
    setName: (name: IFieldFormUnmutable) => void
}

const Name:FC<Props> = ({name, setName}) => {
    return (
        <div className="data-container">
            <input type="text"
                value={name.value}
                disabled={name.unmutable}
                placeholder="Imię"
                id='name-input'
                className='data-container__value-input'
                onChange={(e) => validateName(e.target.value, setName, name)}
            />

            <div className="mistake-info-container">
                {name.mistakeInformation.map((info: string) => <p key={`key${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Name
