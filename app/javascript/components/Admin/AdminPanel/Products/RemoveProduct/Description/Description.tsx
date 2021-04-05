import React, {FC} from 'react'

interface Props {description: string,}

const Description:FC<Props> = ({description}) => {
    return (
        <div className="input-container">
            <span className="input-container__input">{description}</span>
        </div>
    )
}

export default Description
