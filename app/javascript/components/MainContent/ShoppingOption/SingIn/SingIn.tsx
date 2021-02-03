import React, {useState} from 'react'

import {Redirect} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../../../../../redux/user/duck/actions'

const SingIn = () =>  {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const userID = useSelector((state: any) => state.userReducer.user.userID)
    const dispatch = useDispatch()

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
                if(user.userID !== 0)
                    dispatch(actions.singInUser(user.userID))
                else
                    alert('Nie ma takiego usera')
            })
        }
    }

    console.log(userID)

    return (
        <>
            {/*  I have to do it here, I can't use Link to because it movves me to form event when user isn't loggged - e.preventDefault() doesn't work */}
            {userID !== 0 ? <Redirect to="/home/OrderForm"/> : null} 

            <div className="sing-in-container">
                <div className="ornament">
                    <p>Logowanie</p>
                </div>

                <div className="fileds-container">
                    <div>
                        <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    </div>

                    <div>
                        <input type="text" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div>
                        <span className="prompt">Nie pamiętam hasła</span>
                    </div>

                    <div>
                        <button onClick={LogIn} className="log-in-btn">Zaloguj się</button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default SingIn
