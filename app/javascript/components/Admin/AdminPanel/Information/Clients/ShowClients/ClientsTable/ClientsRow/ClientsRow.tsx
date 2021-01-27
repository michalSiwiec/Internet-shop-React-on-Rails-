import React, {FC} from 'react'

import PhoneNumberColumn from './PhoneNumberColumn/PhoneNumberColumn'
import EmailColumn from './EmailColumn/EmailColumn'
import SurnameColumn from './SurnameColumn/SurnameColumn'
import NameColumn from './NameColumn/NameColumn'
import Buttons from './Buttons/Buttons'

interface Props {
    userData: {
        user_id: 0,
        user_delivery_addres: [{
            country: '',
            city: '',
            house_number: '',
            postal_code: ''
        }],
        data_login: [{
            login: '',
            password: ''
        }],
        personal_data: [{
            name: '',
            surname: '',
            email: '',
            phone_number: ''
        }]
    }
}

const ClientsRow:FC<Props> = ({userData}) => {
    return (
        <tr key={`user ${userData.data_login[0].login}` }>
            <NameColumn name={userData.personal_data[0].name} />
            <SurnameColumn surname={userData.personal_data[0].surname} />
            <EmailColumn email={userData.personal_data[0].email} />
            <PhoneNumberColumn phoneNumber={userData.personal_data[0].phone_number} />
            <Buttons userID={userData.user_id} />
        </tr>
    )
}

export default ClientsRow
