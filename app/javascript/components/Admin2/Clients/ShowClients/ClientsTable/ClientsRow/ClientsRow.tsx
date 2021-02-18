import React, {FC} from 'react'

import PhoneNumberColumn from './PhoneNumberColumn/PhoneNumberColumn'
import EmailColumn from './EmailColumn/EmailColumn'
import SurnameColumn from './SurnameColumn/SurnameColumn'
import NameColumn from './NameColumn/NameColumn'
import Buttons from './Buttons/Buttons'

interface Props {
    userID: number,
    dataLogins: {
        login: string,
        password: string
    },
    personalData: {
        name: string,
        surname: string,
        email: string,
        phone_number: string
    }
}

const ClientsRow:FC<Props> = ({userID, dataLogins, personalData}) => {
    return (
        <tr key={`user ${dataLogins.login}` }>
            <NameColumn name={personalData.name} />
            <SurnameColumn surname={personalData.surname} />
            <EmailColumn email={personalData.email} />
            <PhoneNumberColumn phoneNumber={personalData.phone_number} />
            <Buttons userID={userID} />
        </tr>
    )
}

export default ClientsRow
