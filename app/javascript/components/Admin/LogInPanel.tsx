import React, {useState} from 'react'

import '../../../assets/stylesheets/logInPanel.scss'

const LogInPanel = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const LogIn = (e) => {
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
        .then((data) => console.log(data))
    }

    return (
        <div className="log-in-panel-container">
            <form action="">
                <h1>Zaloguję</h1>

                <div className="input-container">
                    <input type="text" placeholder="Login"  value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>

                <div className="input-container">
                    <input type="text" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="input-container">
                    <input type="submit" value="Zaloguj" onClick={(e) => LogIn(e)}/>
                </div>
            </form>
        </div>
    )
}

export default LogInPanel
