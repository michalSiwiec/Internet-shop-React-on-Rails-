import React, {FC} from 'react'

import {IOrderLogOutPerson} from '../../../../../../../../TypeScript/Interfaces/Interfaces'

import {Link} from 'react-router-dom'

interface Props {order: IOrderLogOutPerson}

const TableRow:FC<Props> = ({order}) => {
    return (
        <tr key={`order${order.orderID}`}>
            <td>{order.dataPerson.name}</td>
            <td>{order.dataPerson.surname}</td>
            <td><Link to={`/admin/Orders/commonOrder/${order.orderID}`}>{<button>Zobacz</button>}</Link></td>
        </tr>
    )
}

export default TableRow