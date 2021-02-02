import React, {FC} from 'react'

import {validateSurname} from '../../../../../../Helpers/Admins/Admins'

interface Props {
    surname: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setSurname: any
}

const Surname:FC<Props> = ({surname, setSurname}) =>  {
    return (
        <div>
            <input type="text" value={surname.value} onChange={(e) => validateSurname(e.target.value, setSurname, surname)} />

            <div className="mistake-info-container">
                {surname.mistakeInformation.map(info => <p key={`info${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Surname
