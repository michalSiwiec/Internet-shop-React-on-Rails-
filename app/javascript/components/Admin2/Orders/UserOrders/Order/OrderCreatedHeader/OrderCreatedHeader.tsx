import React, {FC} from 'react'

interface Props {dataCreated: string}

const OrderCreatedHeader:FC<Props> = ({dataCreated}) => <h3>{`Zamówienie z dnia ${dataCreated}`}</h3>

export default OrderCreatedHeader
