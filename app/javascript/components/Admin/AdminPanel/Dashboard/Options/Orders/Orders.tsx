import React from 'react'

import {Link} from 'react-router-dom'

const Orders = () => {
    return (
        <div className="option-container bigger-container orders-container">
            <div className="overlay overlay--bottom">
                <h3>Sledz zamóswienia aby być zawsze na bieząco!</h3>
                <Link to="/admin/Orders"><span>Wejsdz!</span></Link>
            </div>
        </div>
    )

}

export default Orders

