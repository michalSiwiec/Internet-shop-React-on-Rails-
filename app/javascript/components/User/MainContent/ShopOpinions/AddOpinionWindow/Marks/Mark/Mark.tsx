import React, {FC} from 'react'

interface Props {
    setOpinionMark: (opinionMark: number) => void,
    markValue: number,
    markDescription: string
}

const Mark:FC<Props> = ({setOpinionMark, markValue, markDescription}) => {
    console.log()

    const stars: Array<any> = []

    for(let i = 0; i < markValue; ++i)
        stars.push(<i className="fas fa-star"></i>)

    return (
        <div className="mark-container">
            <span>{markDescription}</span>
            {stars}            
            <button onClick={() => setOpinionMark(markValue)}>Wybierz</button>
        </div>
    )
}

export default Mark
