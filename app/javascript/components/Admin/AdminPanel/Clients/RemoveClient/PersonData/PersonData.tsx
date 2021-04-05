import React, {FC} from 'react'

interface Props {name:string, surname: string}

const PersonData:FC<Props> = ({name, surname}) => {
    return (
        <div className="remove-user-form__input-container">
            <span className="remove-user-form__input-container__input">{`${name} ${surname}`}</span>
        </div>
    )
}

export default PersonData
