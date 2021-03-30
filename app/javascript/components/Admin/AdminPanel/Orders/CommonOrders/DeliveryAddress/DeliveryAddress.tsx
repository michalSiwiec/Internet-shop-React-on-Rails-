import React, {FC} from 'react'

import {IDeliveryAddress} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import Header from './Header/Header'
import InfoField from './InfoField/InfoField'

interface Props {deliveryAddress: IDeliveryAddress}

const DeliveryAddress:FC<Props> = ({deliveryAddress}) => {
    return (
        <div className="part-container">
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
