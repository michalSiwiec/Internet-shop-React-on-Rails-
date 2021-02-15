import React, {useEffect, useState} from 'react'

import {Line} from 'react-chartjs-2'

const WholeMonthPriceDiagram = () => {
    const [monthSumOrders, getMonthSumOrders]: Array<any> = useState([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_sum_orders_associated_with_month", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(monthSumOrders_ => getMonthSumOrders(monthSumOrders_))
    }, [])

    // console.log(monthSumOrders)

    const labels: any = []
    const wholeMonthsPrices: any = []

    monthSumOrders.forEach((data: any) => {
        labels.push(data.month)
        wholeMonthsPrices.push(data.wholeMonthPrice)
    })

    const wholeMonthPriceData = {
        labels: labels,
        datasets: [
            {
                label: "Sales for 2020",
                data: wholeMonthsPrices,
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(255, 206, 86, 0.2)']
            }
        ]
    }

    return (
        <div className="whole-moth-price-diagram-container">
            <Line data={wholeMonthPriceData} />
        </div>
    )
}

export default WholeMonthPriceDiagram
