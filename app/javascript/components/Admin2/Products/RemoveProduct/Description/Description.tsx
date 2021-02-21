import React, {FC} from 'react'

interface Props {description: string,}

const Description:FC<Props> = ({description}) => {
    return (
        <div className="input-container">
            <input type="text" value={description} disabled className="input-container__input" />
        </div>
    )
}

export default Description
