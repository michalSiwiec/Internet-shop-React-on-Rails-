import React, {useState} from 'react'

import actions from '../../../../redux/admin/actions'
import {useDispatch} from 'react-redux'

import '../../../assets/stylesheets/logInPanel.scss'

const LogInPanel = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    
    const LogIn = (e:any) => {
        e.preventDefault()

        if(login !== '' && password !== '')
            getAdmin()
        else
            alert('Prosze wypelnic wszystkie pola!')
    }

    const getAdmin = () => {
        const URL = `/api/v1/admins/log_in_admin?login=${login}&password=${password}`
        const OPTIONS = {method: 'GET'}
        
        fetch(URL,OPTIONS)
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((data) => {
            const adminID = data[0].id

            if(adminID !== 0)
                dispatch(actions.logInAdmin(adminID))
            else
                console.log('Admin doessanqqqqqt exist!')
        })
    }

    return (
        <div className="log-in-panel-container">
            <form>
                <h1>Zaloguję</h1>

                <div className="input-container">
                    <input type="text" placeholder="Login"  value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>

                <div className="input-container">
                    <input type="text" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="input-container">
                    <button onClick={(e) => LogIn(e)}>Zaloguj</button>
                </div>
            </form>
        </div>
    )
}

export default LogInPanel
