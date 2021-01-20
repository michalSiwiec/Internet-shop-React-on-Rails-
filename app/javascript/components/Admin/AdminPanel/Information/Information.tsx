import React, {FC} from 'react'

import Products from './Products/Products'

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
            <div className="orders-diagram-container" ref={informationParts.ordersDiagram}>
                <h2>Orders Diagram</h2>
            </div>

            <div className="order-list-container" ref={informationParts.ordersList}>
                <h2>Orders List</h2>
            </div>

            <Products refElement={informationParts.productsList} />

            <div className="clients-list-container" ref={informationParts.clientsList}>
                <h2>Clinets list container</h2>
            </div>

            <div className="statistics-container" ref={informationParts.statisticDiagrams}>
                <h2>Statistic digrams</h2>
            </div>

            <div className="complaints-container" ref={informationParts.complaintsList}>
                <h2>Complaints list</h2>
            </div>

            <div className="opinion-container" id="opinion-container" ref={informationParts.opinionsList}>
                <h2>Opinions list</h2>
            </div>
    </div>
    )
}

export default Information
