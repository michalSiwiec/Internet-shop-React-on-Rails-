import React, {FC} from 'react'

interface Props{
    opinionsList: any
}

const Opinions:FC<Props> = ({opinionsList}) => {
    return (
        <div className="opinion-container" id="opinion-container" ref={opinionsList}>
            <h2>Opinions list</h2>
        </div>
    )
}

export default Opinions
