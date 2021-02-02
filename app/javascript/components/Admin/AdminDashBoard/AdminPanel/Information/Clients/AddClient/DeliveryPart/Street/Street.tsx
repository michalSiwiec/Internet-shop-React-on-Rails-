import React, {FC} from 'react'

import {validateStreet} from '../../../../../../../../../Helpers/Users/Users'

interface Props {
    street: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setStreet: any
}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div>
            <p>Ulica</p>
            
            <input type="text" value={street.value} onChange={(e) => validateStreet(e.target.value, setStreet, street)} />

            <div className="mistake-info-container">
                {street.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Street
