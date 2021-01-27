import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import Header from './Header/Header'
import Name from './Name/Name'
import Surname from './Surname/Surname'
import Buttons from './Buttons/Buttons'

import '../../../../../../../assets/stylesheets/RemoveClient.scss'

const RemoveClient = () => {

    const {userID} = useParams()
    const [userPersonData, setUserPersonData] = useState({
        name: '',
        surname: ''
    })

    useEffect(() => {
        fetch(`/api/v1/users/get_user_person_data?userID=${userID}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(user_person_data => setUserPersonData(user_person_data))
    }, [])

    return (
        <div className="remove-user-container">
            <div className="overlay"></div>
            
            <div className="remove-user-form">
                <Header />

                <form>
                    <Name name={userPersonData.name} />
                    <Surname surname={userPersonData.surname} />
                    <Buttons userID={userID}/>
                </form>
            </div>
        </div>
    )
}

export default RemoveClient
