import React from 'react'

import {Link} from 'react-router-dom'

const CancelButton = () => {
    return (
        <div className="data-container">
           <Link to=""><button>Anuluj</button></Link> 
        </div>
    )
}

export default CancelButton
