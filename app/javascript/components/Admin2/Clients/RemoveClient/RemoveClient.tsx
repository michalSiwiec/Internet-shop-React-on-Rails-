import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import {IUser} from '../../../../../TypeScript/Interfaces/Interfaces'

import Header from './Header/Header'
import Name from './Name/Name'
import Surname from './Surname/Surname'
import Buttons from './Buttons/Buttons'

interface IUserPersonalData{
    name: string,
    surname: string
}

const RemoveClient = () => {
    const {userID} = useParams()
    const [userPersonalData, setUserPersonalData] = useState<IUserPersonalData>({
        name: '',
        surname: ''
    })

    useEffect(() => {
        fetch(`/api/v1/user/${userID}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((user_: IUser) => setUserPersonalData({
            name: user_.personalData.name,
            surname: user_.personalData.surname
        }))
    }, [])

    return (
        <div className="remove-user-container">
            <div className="overlay"></div>
            
            <div className="remove-user-form">
                <Header />

                <form>
                    <Name name={userPersonalData.name} />
                    <Surname surname={userPersonalData.surname} />
                    <Buttons userID={userID}/>
                </form>
            </div>
        </div>
    )
}

export default RemoveClient
