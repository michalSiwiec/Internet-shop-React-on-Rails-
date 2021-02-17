import React, {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import '../../../../../assets/stylesheets/Admin2/Orders/CommonOrder/CommonOrder.scss'

import Header from './Header/Header'
import DeliveryAddress from './DeliveryAddress/DeliveryAddress'
import OrderDetails from './OrderDetails/OrderDetails'
import PersonalData from './PersonalData/PersonalData'
import Buttons from './Buttons/Buttons'

interface Order {
    data_created: string,
    data_person: {
        name: string,
        surname: string,
        email: string,
        phone_number: string
    },
    delivery_address: {
        country: string,
        city: string,
        house_number: number,
        postal_code: string,
        province: string,
        street: string
    },
    order_details: Array<{
        product_description: string,
        product_price: number,
        quantity: number
    }>
    order_price: number
}

const CommonOrders = () => {
    const {orderID} = useParams()
    const [order, setOrder] = useState<Order>({
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
        fetch(`/api/v1/orders/${orderID}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(order_ => setOrder(order_))
    }, [])

    return (
        <div className="common-orders-container">
            <div className="overlay"></div>

            <div className="present-order-container">
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
