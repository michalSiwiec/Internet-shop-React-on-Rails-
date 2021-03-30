import React, {FC} from 'react'

import {IPersonalData} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import Header from './Header/Header'
import InfoField from './InfoField/InfoField'

interface Props {dataPerson: IPersonalData}

const PersonalData:FC<Props> = ({dataPerson}) => {
    return (
        <div className="part-container">
            <Header />
            <InfoField value={`Imię: ${dataPerson.name}`} />
            <InfoField value={`Nazwisko: ${dataPerson.surname}`} />
            <InfoField value={`Adres E-mail: ${dataPerson.email}`} />
            <InfoField value={`Numer telefonu: ${dataPerson.phone_number}`} />
        </div>
    )
}

export default PersonalData
