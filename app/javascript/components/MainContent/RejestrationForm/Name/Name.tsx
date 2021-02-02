import React, {FC} from 'react'

import {validateName} from '../../../../Helpers/Users/Users'

interface Props {
    name: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setName:any
}

const Name:FC<Props> = ({name, setName}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Imię" onChange={(e) => validateName(e.target.value, setName, name)} />
            </div>

            <div className="mistake-information-container">
                {name.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Name