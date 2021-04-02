import React, {FC, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../../../../../../redux/user/duck/actions'

interface Props {
    logInWindowVisible: any,
    setLogInWindowVisible: any
}

const Window:FC<Props> = ({logInWindowVisible, setLogInWindowVisible}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const LogIn = () => {
        if(login !== '' && password !== ''){
            fetch(`/api/v1/user/logInUser?login=${login}&password=${password}`,{method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then((user: {userID: number}) => {
                if(user.userID !== 0){
                    dispatch(actions.singInUser(user.userID))
                    setLogInWindowVisible('unvisible')
                }
                else
                    alert('Nie ma takiego usera')
            })
        }
    }

    return (
        <div className={`log-in-window ${logInWindowVisible}`}>
                <div>
                    <p>Login</p>
                    <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>

                <div>
                    <p>Hasło</p>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <div>
                    <button onClick={() => setLogInWindowVisible('unvisible')}>Anuluj</button>
                    <button onClick={() => LogIn()}>Zaloguj</button>
                </div>
            </div>
    )
}

export default Window
