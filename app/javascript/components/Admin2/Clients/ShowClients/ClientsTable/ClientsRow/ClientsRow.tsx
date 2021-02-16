import React, {FC} from 'react'

import PhoneNumberColumn from './PhoneNumberColumn/PhoneNumberColumn'
import EmailColumn from './EmailColumn/EmailColumn'
import SurnameColumn from './SurnameColumn/SurnameColumn'
import NameColumn from './NameColumn/NameColumn'
import Buttons from './Buttons/Buttons'

interface Props {
    userData: {
        userID: 0,
        deliveryAddres: {
            country: '',
            city: '',
            house_number: '',
            postal_code: ''
        },
        dataLogin: {
            login: '',
            password: ''
        },
        personalData: {
            name: '',
            surname: '',
            email: '',
            phone_number: ''
        }
    }
}

const ClientsRow:FC<Props> = ({userData}) => {
    return (
        <tr key={`user ${userData.dataLogin.login}` }>
            <NameColumn name={userData.personalData.name} />
            <SurnameColumn surname={userData.personalData.surname} />
            <EmailColumn email={userData.personalData.email} />
            <PhoneNumberColumn phoneNumber={userData.personalData.phone_number} />
            <Buttons userID={userData.userID} />
        </tr>
    )
}

export default ClientsRow
