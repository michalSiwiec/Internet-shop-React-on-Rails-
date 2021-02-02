import React, {FC} from 'react'

import {validateSurname} from '../../../../../../../../Helpers/Users/Users'

interface Props {
    surname: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setSurname: any
}

const Surname:FC<Props> = ({surname, setSurname}) => {
    return (
        <div>
            <p>Nazwisko</p>

            <input type="text" value={surname.value} onChange={(e) => validateSurname(e.target.value, setSurname, surname)} />

            <div className="mistake-info-container">
                {surname.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Surname
