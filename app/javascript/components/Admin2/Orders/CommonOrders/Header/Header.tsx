import React, {FC} from 'react'

interface Props{dataCreated: string}

const Header:FC<Props> = ({dataCreated}) => <h1 className="order-details__main-header">{`Zamówienie z dnia: ${dataCreated}`}</h1>

export default Header
