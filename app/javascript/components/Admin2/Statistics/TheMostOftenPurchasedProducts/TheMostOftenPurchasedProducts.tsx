import React, {useState, useEffect} from 'react'

import {Bar} from 'react-chartjs-2'

const TheMostOftenPurchasedProducts = () => {
    const [theMostOftenPurchasedProducts, setTheMostOftenPurchasedProducts]: Array<any> = useState([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_the_most_often_purchased_product", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(theMostOftenPurchasedProducts_ => setTheMostOftenPurchasedProducts(theMostOftenPurchasedProducts_))
    }, [])

    // console.log(theMostOftenPurchasedProducts)

    const labels: any = []
    const quantities: any = []

    theMostOftenPurchasedProducts.forEach((data: any) => {
        labels.push(data.label)
        quantities.push(data.quantity)
    })

    // console.log(labels, quantities)

    const tenTheMostPruchasesProducts = {
        labels: labels,
        datasets: [
            {
                label: labels,
                data: quantities,
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)',

                    'rgba(125, 126, 44, 0.2)',
                    'rgba(56, 223, 114, 0.2',
                    'rgba(177, 177, 239, 0.2)',
                    'rgba(111, 100, 100, 0.2)',
                    'rgba(23, 114, 92, 0.2)'
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)',

                    'rgba(125, 126, 44, 0.2)',
                    'rgba(56, 223, 114, 0.2',
                    'rgba(177, 177, 239, 0.2)',
                    'rgba(111, 100, 100, 0.2)',
                    'rgba(23, 114, 92, 0.2)'
                ],
                pointBackgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)',

                    'rgba(125, 126, 44, 0.2)',
                    'rgba(56, 223, 114, 0.2',
                    'rgba(177, 177, 239, 0.2)',
                    'rgba(111, 100, 100, 0.2)',
                    'rgba(23, 114, 92, 0.2)'
                ],
                pointBorderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)',

                    'rgba(125, 126, 44, 0.2)',
                    'rgba(56, 223, 114, 0.2',
                    'rgba(177, 177, 239, 0.2)',
                    'rgba(111, 100, 100, 0.2)',
                    'rgba(23, 114, 92, 0.2)'
                ]
            }
        ]
    }


    return (
        <div className="the-most-often-purchased-products-container">
            <Bar data={tenTheMostPruchasesProducts} />
        </div>
    )
}

export default TheMostOftenPurchasedProducts
