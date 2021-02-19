import React, {FC} from 'react'

interface Props{logInAdmin: () => void}

const Button:FC<Props> = ({logInAdmin}) => {
    return (
        <div className="log-in-button-container">
            <button className="log-in-button-container__button" onClick={logInAdmin}>Zaloguj</button>
        </div>
    )
}

export default Button
