import React, {FC} from 'react'

interface Props {surname: string}

const Surname:FC<Props> = ({surname}) => {
    return (
        <div className="remove-user-form__input-container">
            <input type="text" disabled value={surname} className="remove-user-form__input-container__input" />
        </div>
    )
}

export default Surname
