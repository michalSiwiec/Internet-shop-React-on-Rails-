import React, {FC} from 'react'

import Header from './Header/Header'
import InfoField from './InfoField/InfoField'

interface Props {deliveryAddress: any}

const DeliveryAddress:FC<Props> = ({deliveryAddress}) => {
    return (
        <div className="delivery-address-container">
            <Header />
            <InfoField value={`Kraj: ${deliveryAddress.country}`} />
            <InfoField value={`Miasto: ${deliveryAddress.city}`} />
            <InfoField value={`Kod pocztowy: ${deliveryAddress.postal_code}`} />
            <InfoField value={`Ulica: ${deliveryAddress.street}`} />
            <InfoField value={`Numer domu/mieszkania: ${deliveryAddress.house_number}`} />
        </div>
    )
}

export default DeliveryAddress
