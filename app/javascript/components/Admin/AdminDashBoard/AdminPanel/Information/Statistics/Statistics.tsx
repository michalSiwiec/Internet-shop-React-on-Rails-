import React, {FC} from 'react'

interface Props{
    statisticDiagrams: any
}

const Statistics:FC<Props> = ({statisticDiagrams}) => {
    return (
        <div className="statistics-container" ref={statisticDiagrams}>
            <h2>Statistic digrams</h2>
        </div>
    )
}

export default Statistics
