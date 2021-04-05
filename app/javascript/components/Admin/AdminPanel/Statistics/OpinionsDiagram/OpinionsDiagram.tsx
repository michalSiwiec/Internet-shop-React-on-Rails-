import React, {useEffect, useState} from 'react'

import {IOpinionsData} from '../../../../../../TypeScript/Interfaces/Interfaces'

import {Doughnut} from 'react-chartjs-2'

const OpinionsDiagram = () => {
    const [opinionsData, setOpinionsData] = useState<Array<IOpinionsData>>([])

    useEffect(() => {
        fetch("/api/v1/diagrams/get_relation_between_opinion_mark", {method: "GET"})
        .then(response => {
            if(response.ok) return response.json()
            else return {info: "Something went wrong!"}
        })
        .then((opinionsData_: Array<IOpinionsData>) => setOpinionsData(opinionsData_))
    }, [])

    const labels: Array<string> = []
    const persentageOpininsPart: Array<number> = []

    opinionsData.forEach((data) => {
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
                    'rgba(255,255,0,1)',
                    'rgba(36,5,255,1)',
                    'rgba(0,255,0,1)',
                    'rgba(255,0,0,1)',
                    'rgba(199,203,255,1)'
                ],
                backgroundColor: [
                    'rgba(255,255,0,1)',
                    'rgba(36,5,255,1)',
                    'rgba(0,255,0,1)',
                    'rgba(255,0,0,1)',
                    'rgba(199,203,255,1)'
                ]
            }
        ]
    }

    return (
        <div className="presentation-data-container">
            <h3 className="presentation-data-container__title">Opinie uzytkowników</h3>
            <Doughnut data={opinionsDiagramData} />
        </div>
    )
}

export default OpinionsDiagram
