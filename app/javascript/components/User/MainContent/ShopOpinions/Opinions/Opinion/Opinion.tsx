import React, {FC} from 'react'

import '../../../../../../../assets/Fontello/fontello-8f6edee7 2/css/fontello.css'

interface Props {
    opinion: any
}

const Opinion:FC<Props> = ({opinion}) => {
    const stars: Array<any> = []

    for(let i = 0, size = opinion.mark; i < size; ++i)
        stars.push(<i className="icon-star" key={`opinion-star${i}`}></i>)

    return (
        <div className="opinion-container">
            <div className="description-container">
                <q>{opinion.description}</q>
                <span>{stars}</span>
            </div>

            <div className="owner-data-container">
                <p>{`${opinion.name} ${opinion.surname}`} <span>{opinion.dataCreated}</span></p>
            </div>
        </div>
    )
}

export default Opinion
