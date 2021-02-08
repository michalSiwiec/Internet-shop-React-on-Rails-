import React, {FC} from 'react'

import {validateSurname} from '../../../../../Helpers/Users/Users'

interface Props {
    surname: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setSurname:any
}

const Surname:FC<Props> = ({surname, setSurname}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Nazwisko" onChange={(e) => validateSurname(e.target.value, setSurname, surname)} />
            </div>

            <div className="mistake-information-container">
                {surname.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Surname