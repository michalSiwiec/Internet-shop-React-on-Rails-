import React from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

const Orders = () => {
    const {path} = useRouteMatch()

    return (
        <div className="option-container bigger-container orders-container">
            <div className="overlay overlay--bottom">
                <h3>Sledz zamóswienia aby być zawsze na bieząco!</h3>
                <Link to={`${path}Orders`}>
                    <span>Wejdz!</span>
                </Link>
            </div>
        </div>
    )

}

export default Orders

