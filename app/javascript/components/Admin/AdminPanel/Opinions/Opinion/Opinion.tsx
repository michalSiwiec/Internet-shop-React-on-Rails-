import React, {FC} from 'react'


import OwnerData from './OwnerData/OwnerData'
import Description from './Description/Description'

interface Props {opinion: any}

const Opinion:FC<Props> = ({opinion}) => {
    return (
        <div className="opinion-container">
            <Description description={opinion.description} />
            <OwnerData opinion={opinion} />
        </div>
    )
}

export default Opinion
