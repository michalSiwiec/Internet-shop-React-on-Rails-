import React, {useState} from 'react'

import { useHistory } from "react-router-dom";

import {useDispatch} from 'react-redux'
import actions from '../../../../redux/admin/actions'

import '../../../../assets/stylesheets/Admin/Dashboard/LogInPanel/LogInPanel.scss'

import Header from './Header/Header'
import Login from './Login/Login'
import Password from './Password/Password'
import Button from './Button/Button'

const LogInPanel = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

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

                if(id !== 0){
                    dispatch(actions.logInAdmin(id))
                    history.push("/admin")
                }
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
