import React, {FC} from 'react'

interface Props {dataCreated: string}

const OrderCreatedHeader:FC<Props> = ({dataCreated}) => <h2 className="user-order-container__header">{`Zamówienie z dnia ${dataCreated}`}</h2>

export default OrderCreatedHeader
