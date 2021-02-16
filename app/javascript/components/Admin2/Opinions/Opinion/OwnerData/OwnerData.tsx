import React, {FC} from 'react'

interface Props {opinion: any}

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
