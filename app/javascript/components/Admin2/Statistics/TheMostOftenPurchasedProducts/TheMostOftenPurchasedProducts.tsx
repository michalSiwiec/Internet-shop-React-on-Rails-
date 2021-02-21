import React, {useState, useEffect} from 'react'
import {ITheMostCommonProduct} from '../../../../../TypeScript/Interfaces/Interfaces'

import {Bar} from 'react-chartjs-2'

const TheMostOftenPurchasedProducts = () => {
    const [theMostOftenPurchasedProducts, setTheMostOftenPurchasedProducts] = useState<Array<ITheMostCommonProduct>>([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_the_most_often_purchased_product", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then((theMostOftenPurchasedProducts_: Array<ITheMostCommonProduct>) => setTheMostOftenPurchasedProducts(theMostOftenPurchasedProducts_))
    }, [])

    const labels: Array<string> = []
    const quantities: Array<number> = []

    theMostOftenPurchasedProducts.forEach((data) => {
        labels.push(data.label)
        quantities.push(data.quantity)
    })

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
        <div className="presentation-data-container">
            <Bar data={tenTheMostPruchasesProducts} />
            <h4 className="presentation-data-container__title">Najczęściej kupowane produkty</h4>
        </div>
    )
}

export default TheMostOftenPurchasedProducts
