import React, {FC} from 'react'

interface Props {name: string}

const Name:FC<Props> = ({name}) => {
    return (
        <div className="remove-user-form__input-container">
            <input type="text" disabled value={name} className="remove-user-form__input-container__input" />
        </div>
    )
}

export default Name
