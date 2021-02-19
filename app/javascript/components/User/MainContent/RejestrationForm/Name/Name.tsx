import React, {FC} from 'react'

import {IFieldForm} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {validateName} from '../../../../../Helpers/Users/Users'

interface Props {
    name: IFieldForm,
    setName: (name: IFieldForm) => void
}

const Name:FC<Props> = ({name, setName}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Imię" onChange={(e) => validateName(e.target.value, setName, name)} />
            </div>

            <div className="mistake-information-container">
                {name.mistakeInformation.map((info: string) => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Name