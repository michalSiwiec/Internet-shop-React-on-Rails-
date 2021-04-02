import React, {useState, useEffect} from 'react'

import {IReduxState, IUser} from '../../../../../TypeScript/Interfaces/Interfaces'

import {useSelector} from 'react-redux'

import Logged from './Logged/Logged'
import Unlogged from './Unlogged/Unlogged'
import Window from './Window/Window'

const LogInWindow = () => {
    const [logInWindowVisible, setLogInWindowVisible] = useState('unvisible')
    const [userData, setUserData] = useState({name: '', surname: ''})

    const userID = useSelector((state: IReduxState) => state.userReducer.user.userID)

    useEffect(() => {        
        if(userID !== 0){
            fetch(`/api/v1/user/${userID}`, {method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then((user: IUser) => setUserData({name: user.personalData.name, surname: user.personalData.surname}))
        }
    }, [userID])

    return (
        <div className="login-container">
            {userID !== 0 ? <Logged userData={userData} /> : <Unlogged setLogInWindowVisible={setLogInWindowVisible} />}
            <Window logInWindowVisible={logInWindowVisible} setLogInWindowVisible={setLogInWindowVisible} />
        </div>
    )
}

export default LogInWindow
