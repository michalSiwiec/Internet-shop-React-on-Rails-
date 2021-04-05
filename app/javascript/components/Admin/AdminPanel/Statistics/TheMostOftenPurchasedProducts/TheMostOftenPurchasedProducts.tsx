import React, {useState, useEffect} from 'react'
import {ITheMostCommonProduct} from '../../../../../../TypeScript/Interfaces/Interfaces'

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
                    'rgba(255,255,0,1)',
                    'rgba(36,5,255,1)',
                    'rgba(0,255,0,1)',
                    'rgba(255,0,0,1)',
                    'rgba(199,203,255,1)',

                    'rgba(228, 126, 144, 1)',
                    'rgba(96, 23, 33, 1',
                    'rgba(177, 177, 239, 1)',
                    'rgba(111, 100, 100, 1)',
                    'rgba(123, 14, 192, 1)'
                ],
                backgroundColor: [
                    'rgba(255,255,0,1)',
                    'rgba(36,5,255,1)',
                    'rgba(0,255,0,1)',
                    'rgba(255,0,0,1)',
                    'rgba(199,203,255,1)',

                    'rgba(228, 126, 144, 1)',
                    'rgba(96, 23, 33, 1',
                    'rgba(177, 177, 239, 1)',
                    'rgba(111, 100, 100, 1)',
                    'rgba(123, 14, 192, 1)'
                ]
            }
        ]
    }

    return (
        <div className="presentation-data-container">
            <h3 className="presentation-data-container__title">Najczęściej kupowane produkty</h3>
            <Bar data={tenTheMostPruchasesProducts} />
        </div>
    )
}

export default TheMostOftenPurchasedProducts
