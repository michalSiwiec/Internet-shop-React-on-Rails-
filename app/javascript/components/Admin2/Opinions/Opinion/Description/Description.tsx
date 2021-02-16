import React, {FC} from 'react'

interface Props {description: string}

const Description:FC<Props> = ({description}) => {
    return (
        <div className="description-container">
            <q>{description}</q>
        </div>
    )
}

export default Description
