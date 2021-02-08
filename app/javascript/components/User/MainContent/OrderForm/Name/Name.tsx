import React, {FC} from 'react'

import {validateName} from '../../../../../Helpers/Orders/Orders'

interface Props {
    name: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>,
        unmutable: boolean
    },
    setName: any
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
                {name.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Name
