import React, {FC} from 'react'

import Products from './Products/Products'
import OrdersDiagrams from './Orders/OrdersDiagrams/OrdersDiagrams'
import OrdersList from './Orders/OrdersList/OrdersList'
import Clients from './Clients/Clients'
import Statistics from './Statistics/Statistics'
import Complaints from './Complaints/Complaints'
import Opinions from './Opinions/Opinions'

interface Props{
    informationParts: {
        ordersDiagram: any,
        ordersList: any,
        productsList: any,
        clientsList: any,
        statisticDiagrams: any,
        complaintsList: any,
        opinionsList: any
    }
}

const Information:FC<Props> = ({informationParts}) => {
    return (
        <div className="information-container">
            <OrdersDiagrams informationPart={informationParts.ordersDiagram}/>
            <OrdersList informationPart={informationParts.ordersList}/>
            <Products refElement={informationParts.productsList} />
            <Clients clientsList={informationParts.clientsList}/>
            <Statistics statisticDiagrams={informationParts.statisticDiagrams}/>
            <Complaints complaintsList={informationParts.complaintsList}/>
            <Opinions opinionsList={informationParts.opinionsList}/>
        </div>
    )
}

export default Information
