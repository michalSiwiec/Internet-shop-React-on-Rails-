import React, {FC} from 'react'

import {validateStreet} from '../../../../../Helpers/Orders/Orders'

interface Props {
    street: {
        value: string,
        setted: boolean,
        mistakeInformation: Array<string>,
        unmutable: boolean
    },
    setStreet: any
}

const Street:FC<Props> = ({street, setStreet}) => {
    return (
        <div className="data-container">
            <input type="text"
                value={street.value}
                disabled={street.unmutable}
                placeholder="Ulica"
                id='street-input'
                className='data-container__value-input'
                onChange={(e) => validateStreet(e.target.value, setStreet, street)}
            />

            <div className="mistake-info-container">
                {street.mistakeInformation.map(info => <span key={`key${info}`}>{info}</span>)}
            </div>
        </div>
    )
}

export default Street
