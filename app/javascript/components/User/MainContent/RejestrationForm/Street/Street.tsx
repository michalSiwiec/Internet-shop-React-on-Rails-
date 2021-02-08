import React, {FC} from 'react'

import {validateStreet} from '../../../../../Helpers/Users/Users'

interface Props {
    street: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>
    },
    setStreet:any
}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Ulica" onChange={(e) => validateStreet(e.target.value, setStreet, street)} />
            </div>

            <div className="mistake-information-container">
                {street.mistakeInformation.map(info => <p key={`info__${info}`}>{info}</p>)}
            </div>
        </div>
    )
}

export default Street
