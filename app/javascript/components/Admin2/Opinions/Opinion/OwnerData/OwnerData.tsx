import React, {FC} from 'react'

import {IOpinion} from '../../../../../../TypeScript/Interfaces/Interfaces'

interface Props {opinion: IOpinion}

const OwnerData:FC<Props> = ({opinion}) => {
    return (
        <div className="owner-data-container">
            <p>
                {opinion.name} {opinion.surname}
                <span>{opinion.dataCreated}</span>
            </p>
        </div>
    )
}

export default OwnerData
