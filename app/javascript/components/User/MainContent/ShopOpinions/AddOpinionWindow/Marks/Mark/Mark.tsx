import React, {FC} from 'react'

interface Props {
    setOpinionMark: (opinionMark: number) => void,
    markValue: number,
    markDescription: string
}

const Mark:FC<Props> = ({setOpinionMark, markValue, markDescription}) => {
    return (
        <div className="mark-container">
            <span>{markDescription}</span>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <i className="icon-star"></i>
            <button onClick={() => setOpinionMark(markValue)}>Wybierz</button>
        </div>
    )
}

export default Mark
