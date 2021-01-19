import React, {useState} from 'react'

import {Link} from 'react-router-dom'

const SingIn = () =>  {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const LogIn = (e:any) => {
        e.preventDefault()

        if(login !== '' && password !== ''){
            fetch(`/api/v1/users/logInUser?login=${login}&password=${password}`,{method: 'GET'})
            .then(response => {
                if(response.ok)
                    return response.text()
                else
                    throw Error(response.statusText);
            })
            .then(data => console.log(data))
        }
        else
            alert('Proszę wypełnić wszystkie pola!')
    }

    return (
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
                        <Link to=""><button onClick={(e) => LogIn(e)} className="log-in-btn">Zaloqqqguj się</button></Link>
                    </div>
                </div>
            </div>
    )
}

export default SingIn
