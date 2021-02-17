import React, {useState} from 'react'

import {Redirect} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import actions from '../../../../../../redux/user/duck/actions'

import Ornament from './Ornament/Ornament'
import Login from './Login/Login'
import Password from './Password/Password'
import Prompt from './Prompt/Prompt'
import LogInButton from './LogInButton/LogInButton'

const SingIn = () =>  {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const userID = useSelector((state: any) => state.userReducer.user.userID)
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
            .then(user => {
                if(user.userID !== 0)
                    dispatch(actions.singInUser(user.userID))
                else
                    alert('Nie ma takiego usera')
            })
        }
    }
    
    return (
        <>
            {/*  I have to do it here, I can't use Link to because it movves me to form event when user isn't loggged - e.preventDefault() doesn't work */}
            {userID !== 0 ? <Redirect to="/home/OrderForm"/> : null} 

            <div className="sing-in-container">
                <Ornament />

                <div className="fileds-container">
                    <Login login={login} setLogin={setLogin} />
                    <Password password={password} setPassword={setPassword} />
                    <Prompt />
                    <LogInButton LogIn={LogIn} />
                </div>
            </div>
        </>
        
    )
}

export default SingIn
