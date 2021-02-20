import React, {FC} from 'react'

interface Props{logInAdmin: () => void}

const Button:FC<Props> = ({logInAdmin}) => {
    return (
        <div className="button-container">
            <button className="button-container__button" onClick={logInAdmin}>Zaloguj</button>
        </div>
    )
}

export default Button
