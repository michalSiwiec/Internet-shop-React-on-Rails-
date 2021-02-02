import React, {FC} from 'react'

import {validateName} from '../../../../../../Helpers/Admins/Admins'

interface Props {
    name: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setName: any
}

const Name:FC<Props> = ({name, setName}) =>  {
    return (
        <div>
            <input type="text" value={name.value} onChange={(e) => validateName(e.target.value, setName, name)} />

            <div className="mistake-info-container">
                {name.mistakeInformation.map(info => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Name
