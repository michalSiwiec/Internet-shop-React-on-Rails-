import React, {useEffect, useState} from 'react'

import {IMonthPrice} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {Line} from 'react-chartjs-2'

const WholeMonthPriceDiagram = () => {
    const [monthSumOrders, setMonthSumOrders] = useState<Array<IMonthPrice>>([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_sum_orders_associated_with_month", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then((monthSumOrders_: Array<IMonthPrice>) => setMonthSumOrders(monthSumOrders_))
    }, [])

    const labels: Array<string> = []
    const wholeMonthsPrices: Array<number> = []

    monthSumOrders.forEach((data) => {
        labels.push(data.month)
        wholeMonthsPrices.push(data.wholeMonthPrice)
    })

    const wholeMonthPriceData = {
        labels: labels,
        datasets: [
            {
                label: "Sales for 2020",
                data: wholeMonthsPrices,
                borderColor: ['rgba(0,255,0,1)'],
                backgroundColor: ['rgba(0,255,0,1)'],
                pointBackgroundColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)'
                ],
                pointBorderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)'
                ]
            }
        ]
    }

    return (
        <div className="presentation-data-container">
            <h3 className="presentation-data-container__title">Średnia cena zamówienia</h3>
            <Line data={wholeMonthPriceData} />
        </div>
    )
}

export default WholeMonthPriceDiagram