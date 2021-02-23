import React, {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import {ICommonOrder} from '../../../../../TypeScript/Interfaces/Interfaces'

import '../../../../../assets/stylesheets/Admin2/Orders/CommonOrder/CommonOrder.scss'

import Header from './Header/Header'
import DeliveryAddress from './DeliveryAddress/DeliveryAddress'
import OrderDetails from './OrderDetails/OrderDetails'
import PersonalData from './PersonalData/PersonalData'
import Buttons from './Buttons/Buttons'

const CommonOrders = () => {
    const {id} = useParams<any>()
    const [order, setOrder] = useState<ICommonOrder>({
        data_created: '',
        data_person: {
            name: '',
            surname: '',
            email: '',
            phone_number: ''
        },
        delivery_address: {
            country: '',
            city: '',
            house_number: 1,
            postal_code: '',
            province: '',
            street: ''
        },
        order_details: [],
        order_price: 0
    })

    useEffect(() => {
        fetch(`/api/v1/orders/${id}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((order_: ICommonOrder) => setOrder(order_))
    }, [])

    return (
        <div className="order-container">
            <div className="overlay"></div>

            <div className="order-details">
                <Header dataCreated={order.data_created} />
                <PersonalData dataPerson={order.data_person} />
                <DeliveryAddress deliveryAddress={order.delivery_address} />
                <OrderDetails orderDetails={order.order_details} price={order.order_price} />
                <Buttons />
            </div>
        </div>
    )
}

export default CommonOrders
