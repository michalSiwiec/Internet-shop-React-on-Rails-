import React, {FC} from 'react'

interface Props {setLogInWindowVisible: any}

const Unlogged:FC<Props> = ({setLogInWindowVisible}) => {
    return (
        <>
            <h2 className="login-container__header">Zaloguj się</h2>

            <div className="login-container__element-container__icon" onClick={() => setLogInWindowVisible('visible')}>
                <i className="fas fa-user"></i>
            </div>
        </>
    )
}

export default Unlogged
