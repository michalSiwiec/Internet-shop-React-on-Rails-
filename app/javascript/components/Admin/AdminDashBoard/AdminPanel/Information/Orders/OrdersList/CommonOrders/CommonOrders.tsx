import React, {useState, useEffect} from 'react'

import {useParams, Link} from 'react-router-dom'

import '../../../../../../../../../assets/stylesheets/AdminPanel/Information/Orders/Lists/CommonOrders/CommonOrders.scss'

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
        fetch(`/api/v1/orders/get_order?orderID=${orderID}`, {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(order_ => setOrder(order_))
    }, [])

    console.log(order)

    return (
        <div className="common-orders-container">
            <div className="overlay"></div>

            <div className="present-order-container">
                <h1>{`Zamówienie z dnia: ${order.data_created}`}</h1>

                <div className="data-person-container">
                    <h2>Dane osobowe</h2>

                    <p>{`Imię: ${order.data_person.name}`}</p>
                    <p>{`Nazwisko: ${order.data_person.surname}`}</p>
                    <p>{`Adres E-mail: ${order.data_person.email}`}</p>
                    <p>{`Numer telefonu: ${order.data_person.phone_number}`}</p>
                </div>

                <div className="delivery-address-container">
                    <h2>Adres dostawy</h2>

                    <p>{`Kraj: ${order.delivery_address.country}`}</p>
                    <p>{`Miasto: ${order.delivery_address.city}`}</p>
                    <p>{`Kod pocztowy: ${order.delivery_address.postal_code}`}</p>
                    <p>{`Ulica: ${order.delivery_address.street}`}</p>
                    <p>{`Numer domu/mieszkania: ${order.delivery_address.house_number}`}</p>
                </div>

                <div className="order-details-container">
                    <h2>Szczegóły zamówienia</h2>
                    
                    {order.order_details.map((order_detail: any) => {
                        return(
                            <div key={`commonOrderContainer${order_detail.product_description}`}>
                                <p>{`Nazwa produktu: ${order_detail.product_description}`}</p>
                                <p>{`Cena: ${order_detail.product_price}`}</p>
                                <p>{`Ilość: ${order_detail.quantity}`}</p>
                            </div>    
                        )
                    })}

                    <p>{`Razem: ${order.order_price}`}</p>
                </div>

                <div className="buttons-container">
                    <Link to="/admin/"><button>Anulsuj</button></Link>
                    <Link to="/admin/"><button onClick={() => alert('I am realizing order')}>Realizuj zamówienie</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CommonOrders
