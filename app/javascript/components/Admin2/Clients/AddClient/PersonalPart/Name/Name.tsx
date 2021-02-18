import React, {FC} from 'react'

import {validateName} from '../../../../../../Helpers/Users/Users'

import {IFieldForm} from '../../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {
    name: IFieldForm,
    setName: (name: IFieldForm) => void
}

const Name:FC<Props> = ({name, setName}) => {
    return (
        <div>
            <p>Imię</p>
            
            <input type="text" value={name.value} onChange={(e) => validateName(e.target.value, setName, name)} />

            <div className="mistake-info-container">
                {name.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Name
