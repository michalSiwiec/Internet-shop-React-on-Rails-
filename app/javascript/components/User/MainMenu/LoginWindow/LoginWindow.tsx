import React, {useState, useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../../../../../redux/user/duck/actions'

const LogInWindow = () => {
    const [logInWindowVisible, setLogInWindowVisible] = useState('unvisible')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({name: '', surname: ''})

    const dispatch = useDispatch()
    const userID = useSelector((state: any) => state.userReducer.user.userID)

    const LogIn = () => {
        if(login !== '' && password !== ''){
            fetch(`/api/v1/users/logInUser?login=${login}&password=${password}`,{method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then(user => {
                if(user.userID !== 0){
                    dispatch(actions.singInUser(user.userID))
                    setLogInWindowVisible('unvisible')
                }
                else
                    alert('Nie ma takiego usera')
            })
        }
    }

    useEffect(() => {
        if(userID !== 0){
            fetch(`/api/v1/users/get_user?userID=${userID}`, {method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then(user => setUserData({name: user.personal_data.name, surname: user.personal_data.surname}))
        }
    }, [userID])

    return (
        <div className="login-container">
            {
                userID === 0
                ?
                 <>
                    <h2>Zaloguj się</h2>
                    <i className="icon-user" onClick={() => setLogInWindowVisible('visible')}></i>
                </>

                :
                <>
                    <h2>Zalogowany jako</h2>
                    <p>{`${userData.name} ${userData.surname}`}</p>
                    <div>
                        <span>Wyloguj</span>
                        <i className="icon-user" onClick={() => dispatch(actions.logOutUser())}></i>
                    </div>
                </>
            }

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
        </div>
    )
}

export default LogInWindow
