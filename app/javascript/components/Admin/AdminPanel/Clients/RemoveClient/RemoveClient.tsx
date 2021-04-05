import React, {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import {IUser} from '../../../../../../TypeScript/Interfaces/Interfaces'

import '../../../../../../assets/stylesheets/Admin/Users/RemoveUser/RemoveUser.scss'

import Header from './Header/Header'
import PersonData from './PersonData/PersonData'
import Buttons from './Buttons/Buttons'

interface IUserPersonalData{name: string, surname: string}

const RemoveClient = () => {
    let {id} = useParams<any>()
    const [userPersonalData, setUserPersonalData] = useState<IUserPersonalData>({
        name: '',
        surname: ''
    })

    useEffect(() => {
        fetch(`/api/v1/user/${id}`, {method: 'GET'})
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
                    <PersonData name={userPersonalData.name} surname={userPersonalData.surname} />
                    <Buttons userID={id}/>
                </form>
            </div>
        </div>
    )
}

export default RemoveClient

