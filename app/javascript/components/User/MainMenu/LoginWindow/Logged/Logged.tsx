import React, {FC} from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../redux/user/duck/actions'

interface Props {userData: any}

const Logged:FC<Props> = ({userData}) => {
    const dispatch = useDispatch()

    return (
        <>
            <h2 className="login-container__header">Zalogowany jako</h2>

            <div className="login-container__element-container">
                <p className="login-container__element-container__element">{`${userData.name} ${userData.surname}`}</p>
            </div>

            <div className="login-container__element-container" onClick={() => dispatch(actions.logOutUser())}>
                <div>
                    <span className="login-container__element-container__element">Wyloguj</span>
                </div>

                <div>
                    <i className="fas fa-user"></i>
                </div>
            </div>
        </>
    )
}

export default Logged
