import React, {FC} from 'react'

interface Props{
    clientsList: any
}

const Clients:FC<Props> = ({clientsList}) => {
    return (
        <div className="clients-list-container" ref={clientsList}>
            <h2>Clinets list container</h2>
        </div>
    )
}

export default Clients
