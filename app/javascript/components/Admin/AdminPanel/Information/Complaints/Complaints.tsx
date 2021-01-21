import React, {FC} from 'react'

interface Props{
    complaintsList: any
}

const Complaints:FC<Props> = ({complaintsList}) => {
    return (
        <div className="complaints-container" ref={complaintsList}>
            <h2>Complaints list</h2>
        </div>
    )
}

export default Complaints
