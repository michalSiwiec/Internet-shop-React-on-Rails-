import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../redux/admin/actions'

import Header from './Header/Header'
import Login from './Login/Login'
import Password from './Password/Password'
import Button from './Button/Button'

import '../../../../../assets/stylesheets/Admin2/Dashboard/LogInPanel/LogInPanel.scss'

const LogInPanel = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const logInAdmin = () => {
        if(login !== "" && password !== ""){
            fetch(`/api/v1/admins/log_in_admin?login=${login}&password=${password}`, {method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.json()
                else
                    throw Error(response.statusText);
            })
            .then((admin: {id: number}) => {
                const id = admin.id

                if(id !== 0)
                    dispatch(actions.logInAdmin(id))
                else
                    alert("Niee ma takiego admina!")
            })
        }
        else
            alert("Prosze wypelnic wszystkie pola")
    }

    return (
        <div className="log-in-panel-container">
            <div className="log-in-panel">
                <Header />
                <Login login={login} setLogin={setLogin} />
                <Password password={password} setPassword={setPassword} />
                <Button logInAdmin={logInAdmin} />
            </div>
        </div>
    )
}

export default LogInPanel
