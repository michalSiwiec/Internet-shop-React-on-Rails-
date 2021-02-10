import React, {FC} from 'react'

interface Props {
    opinion: any
}

const Opinion:FC<Props> = ({opinion}) => {
    return (
        <div className="opinion-container">
            <div className="description-container">
                <q>{opinion.description}</q>
            </div>

            <div className="owner-data-container">
                <p>{`${opinion.name} ${opinion.surname}`} <span>{opinion.dataCreated}</span></p>
            </div>
        </div>
    )
}

export default Opinion
