import React, {useEffect, useState} from 'react'

import {Doughnut} from 'react-chartjs-2'

const OpinionsDiagram = () => {
    const [opinionsData, setOpinionsData] = useState([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_relation_between_opinion_mark", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then(opinionsData_ => setOpinionsData(opinionsData_))
    }, [])

    // console.log(opinionsData)

    const labels: any = []
    const persentageOpininsPart: any = []

    opinionsData.forEach((data: any) => {
        labels.push(data.label)
        persentageOpininsPart.push(data.percentage)
    })


    const opinionsDiagramData = {
        labels: labels,
        datasets: [
            {
                label: "Sales for 2020",
                data: persentageOpininsPart,
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)'
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)'
                ],
                pointBackgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)'
                ],
                pointBorderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(176, 223, 86, 0.2',
                    'rgba(201, 177, 227, 0.2)',
                    'rgba(53, 240, 231, 0.2)',
                    'rgba(100, 0, 5, 0.2)'
                ]
            }
        ]
    }

    return (
        <div className="opinions-diagram-container">
            <Doughnut data={opinionsDiagramData} />
        </div>
    )
}

export default OpinionsDiagram
